import Image from "next/image";
import Link from "next/link";
import HeaderPortal from "./HeaderPortal";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";
import useMediaQuery from "@/hooks/useMediaQuery";

// Imgs
import mobileMenu from "@/assets/img/icons/bars.svg";
import logo from "@/assets/img/titanfx/logo.svg";
import { useAppContext } from "@/context/AppContext";

const Header: React.FC = () => {
    const { isMobile, isDesktop, isNotDesktop } = useMediaQuery();
    const { toggleMenu } = useAppContext();

    return (
        // TODO: fix BG color
        <section className="w-full h-24 md:h-20 lg:h-[90px] pl-7 flex gap-x-5 items-center justify-start bg-[#232323] relative group header">
            {isNotDesktop && (
                <Image src={mobileMenu} className="mobile-menu w-6 h-auto cursor-pointer" width="24" height="19" alt="Mobile Menu" onClick={toggleMenu} />
            )}
            <div className={`flex ${isMobile ? "flex-col gap-1.5 flex-nowrap items-center w-full mr-10" : ""}`}>
                <Link href="/">
                    <Image src={logo} className="w-[120px] md:w-[151px] md:h-[36px] md:mr-20" width="120" height="36" alt="TitanFx" />
                </Link>
                <HeaderPortal />
            </div>
            <div className="flex h-full absolute top-0 right-0">
                {isDesktop && <HeaderLinks />}
                {!isMobile && <HeaderProfile />}
            </div>
        </section>
    )
}

export default Header;
