import Head from 'next/head';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import useMediaQuery from "@/hooks/useMediaQuery";
import HeaderLinks from './HeaderLinks';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isDesktop } = useMediaQuery();

    return (
        <>
            <Head>
                <meta name="description" content="Titan FX is a foreign exchange (forex), metal and commodities broker serving both institutional and retail clients around the world." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {!isDesktop && (
                <>
                    <HeaderLinks />
                    <Sidebar />
                </>
            )}
            <div className={`flex h-screen items-start transition-transform ease-in duration-300 text-gray-800`}>
                {isDesktop && <Sidebar />}
                <main className="flex-1 py-5 px-5 font-light text-sm">{children}</main>
            </div>
        </>
    )
}
export default Layout;
