import MainMenu from "@/components/MainMenu";
import { useAppContext } from "@/context/AppContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRef } from "react";
import { useClickAway } from "react-use";
import HeaderProfile from "./HeaderProfile";
import PWAInstallPrompt from "./PWAInstallPrompt";

const Sidebar: React.FC = () => {
    const sidebarRef = useRef(null);
    const { menuOpen, setMenuOpen } = useAppContext();
    const { isMobile, isDesktop } = useMediaQuery();

    useClickAway(sidebarRef, ({ target }: any) => {
        const burgerMenuTarget = target?.classList?.contains("mobile-menu");

        if ((!isDesktop && menuOpen && !burgerMenuTarget)) {
            setMenuOpen(false);
        }
    });

    const mobileClasses = (!isDesktop) ? "z-10 fixed top-0 left-0 transition-transform ease-in duration-300" : "";
    const mobileOpenClass = isDesktop || (menuOpen && !isDesktop) ? "translate-0" : "-translate-x-[264px]";

    return (
        <section ref={sidebarRef} className={`flex flex-col w-[264px] h-full bg-primary z ${mobileClasses} ${mobileOpenClass}`}>
            {isMobile && <HeaderProfile />}
            <MainMenu />
            <PWAInstallPrompt />
        </section>
    )
}

export default Sidebar;
