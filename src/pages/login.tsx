import LoginForm from '@/components/LoginForm'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>CC - Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-lime-300 text-lime-800">
        <h1>Login</h1>
        <LoginForm />
      </main>
    </>
  )
}
