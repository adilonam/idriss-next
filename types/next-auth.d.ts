// types/next-auth.d.ts

import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

// Extend the Session interface with the additional accessToken property
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      roles?: string[];
    }
  }
}

// Extend the JWT interface with the additional roles property
declare module 'next-auth/jwt' {
  interface JWT {
    roles?: string[];
    accessToken?: string;
  }
}
