import Head from 'next/head';
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useAppContext } from "@/context/AppContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import HeaderLinks from './HeaderLinks';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { menuOpen } = useAppContext();
    const { isDesktop } = useMediaQuery();
    const [sidebarClasses, setSidebarClasses] = useState("");

    useEffect(() => {
        setSidebarClasses(() => isDesktop || (!isDesktop && menuOpen) ? "translate-0" : "-translate-x-[264px]");
    }, [isDesktop, menuOpen]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {!isDesktop && <HeaderLinks />}
            <div className={`flex h-screen items-start transition-transform ease-in duration-300 ${sidebarClasses}`}>
                <Sidebar />
                <main>{children}</main>
            </div>
        </>
    )
}
export default Layout;
