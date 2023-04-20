import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

// Imgs
import personIcon from "@/assets/img/icons/person.svg";
import logoutIcon from "@/assets/img/icons/logout.svg";
import arrowDownIcon from "@/assets/img/icons/arrow-down.svg";
import axios from 'axios';
import { useRouter } from 'next/router';

const HeaderProfile = () => {
    const router = useRouter();

    const linkClasses = "block pl-10 pr-7 py-3 hover:bg-[#2d2d2d] text-sm";

    const handleLogout = (event: any) => {
        event.preventDefault();
        router.push("/api/auth/logout");
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild={true} className="text-white dropdown-profile">
                <span className="flex gap-x-3 items-center px-10 h-24 md:h-full lg:ml-10 text-sm bg-[#232323] border-l border-[#606164] hover:text-primary cursor-pointer">
                    <Image src={personIcon} width="23" height="23" alt="Profile" />
                    <span>Oshin Komre</span>
                    <Image src={arrowDownIcon} width="15" height="9" alt="View more" className="ml-2" />
                </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content align="start" className="text-white bg-[#232323] dropdown-menu-content">
                    <Link href="/profile" className={linkClasses}>Profile</Link>
                    <Link href="/settings" className={linkClasses}>Settings</Link>
                    <Link href="/double-conversion-claim-online-form" className={linkClasses}>Double Conversion Claim</Link>
                    <Link href="/" onClick={handleLogout} className={`flex justify-between items-center ${linkClasses}`}>
                        Logout
                        <Image src={logoutIcon} width="22" height="27" alt="Logout" />
                    </Link>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default HeaderProfile;
