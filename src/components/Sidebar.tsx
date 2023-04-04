import MainMenu from "@/components/MainMenu";
import { useAppContext } from "@/context/AppContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRef } from "react";
import { useClickAway } from "react-use";

const Sidebar: React.FC = () => {
    const sidebarRef = useRef(null);
    const { menuOpen, setMenuOpen } = useAppContext();
    const { isDesktop } = useMediaQuery();

    useClickAway(sidebarRef, ({ target }: any) => {
        const burgerMenuTarget = target?.classList?.contains("cursor-pointer");

        if ((!isDesktop && menuOpen && !burgerMenuTarget)) {
            setMenuOpen(false);
        }
    });

    return (
        <section ref={sidebarRef} className={`w-[264px] h-full bg-primary`}>
            <MainMenu />
        </section>
    )
}

export default Sidebar;
