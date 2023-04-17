import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="bg-lime-300 text-lime-800">
        <h1>Client Cabinet</h1>
        <p>lipsum cosod sit amis aidpeicn cone</p>
        <div className="w-full h-8 bg-gray-200 sm:bg-gray-400 md:bg-gray-600 lg:bg-gray-800">Default</div>
      </main>
    </>
  )
}
