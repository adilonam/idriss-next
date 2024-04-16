import NextAuthProvider from '@/components/NextAuthProvider';
import { Session } from 'next-auth';

import "./globals.css"
import {ComplexNavbar} from '@/components/ComplexNavbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

type RootLayoutProps = {
  children: React.ReactNode;
  session: Session | null; 
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, session }) => {

  return (
    <html lang="en">
      <body className="p-4">
            <NextAuthProvider session={session} > 
              <ComplexNavbar />
              <Sidebar />
              {children}
              <Footer />
            </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
