import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { UserProvider, useUser } from '../UserContext';
import { useAuth } from '../useAuth';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
  useAuth();

  const { user, loading } = useUser();
  if (!user && !loading) {
    return <p>Redirecting to sign in...</p>;
  }

  return (
    <UserProvider>
      <div className={inter.className}>
        <Toaster />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}

export default appWithTranslation(App);
