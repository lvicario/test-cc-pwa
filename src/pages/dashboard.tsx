import Head from 'next/head';
import { ContentBox, ContentTitle, PageTitle } from '@/components/ui';

export default function Dashboard(props: any) {
    console.log("props:", props);

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <PageTitle>My Trading Accounts</PageTitle>
            <ContentBox>
                <ContentTitle className="text-lg">Trading Account 1</ContentTitle>
                Contentbox
            </ContentBox>
            <ContentBox>
                <ContentTitle className="text-lg">Trading Account 2</ContentTitle>
                Contentbox
            </ContentBox>
            <ContentBox>
                <ContentTitle className="text-lg">Trading Account 3</ContentTitle>
                Contentbox
            </ContentBox>
        </>
    )
}

// export async function getServerSideProps(context: any) {
//     // Simulate slow loading page
//     const getProfile = () => {
//         return new Promise((resolve: any, reject: any) => {
//             setTimeout(() => {
//                 resolve({
//                     name: "John Doe",
//                     age: 30
//                 })
//             }, 1000);
//         })
//     }

//     const profile = await getProfile();

//     return {
//         props: {
//             profile
//         }
//     }
// }
