import React from 'react';
import NextAuthProvider from '@/components/NextAuthProvider';
import { Session } from 'next-auth';

import "./globals.css"
import Navbar from '@/components/Navbar';
// Include session in the type definition for props
type RootLayoutProps = {
  children: React.ReactNode;
  session: Session | null; // Assuming you want to allow for a null session
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, session }) => {

  return (
    <html lang="en">
      <body>
          <NextAuthProvider session={session}> 
          <Navbar />
            {children}
          </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
