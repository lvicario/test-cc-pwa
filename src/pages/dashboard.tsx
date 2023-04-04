import axios from 'axios';
import Head from 'next/head';

export default function Login(props: any) {
    console.log("props:", props);

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className="bg-lime-300 text-lime-800">
                <h1>Dashboard</h1>
            </main>
        </>
    )
}

export async function getServerSideProps(context: any) {
    // Simulate slow loading page
    const getProfile = () => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve({
                    name: "John Doe",
                    age: 30
                })
            }, 2000);
        })
    }

    const profile = await getProfile();

    return {
        props: {
            profile
        }
    }
}