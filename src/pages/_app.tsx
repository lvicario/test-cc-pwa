import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from '@/components/Layout';
import { AppProvider } from '@/context/AppContext';
import '@/styles/app.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
          <AppProvider>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </AppProvider>
        </UserProvider>
    )
}