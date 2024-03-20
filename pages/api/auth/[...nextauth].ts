import NextAuth from 'next-auth';
import KeycloakProvider from "next-auth/providers/keycloak";
import jwt from 'jsonwebtoken'; // import jsonwebtoken

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID!,
      clientSecret: process.env.KEYCLOAK_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.accessToken) {
        // Assuming accessToken is a string, as it should normally be.
        token.accessToken = account.accessToken as string;
        
        try {
          // Decode the JWT, which should return null if the token is not correctly formatted or encoded.
          const decodedToken = jwt.decode(token.accessToken);
  
          // Ensure that decodedToken is an object before trying to access properties.
          if (typeof decodedToken === 'object' && decodedToken !== null) {
            token.roles = decodedToken['realm_access']?.roles ?? [];
          }
        } catch (error) {
          console.error('Error decoding accessToken:', error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user = session.user ?? {};
      session.user.roles = token.roles ?? [];
      session.accessToken = token.accessToken;
      return session;
    },
  },


});


