import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import Image from "next/image";

// Imgs
import arrowDownIcon from "@/assets/img/icons/arrow-down.svg";

const HeaderPortal = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex gap-x-5 items-center px-6 py-3 rounded-t-[20px] rounded-b-[20px] data-[state=open]:rounded-b-none bg-[#2d2d2d] text-white text-xs">
                <span>Client Cabinet</span>
                <Image src={arrowDownIcon} width="15" height="9" alt="Arrow" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content align="start" className="px-6 pb-3 text-white text-xs bg-[#2d2d2d] rounded-b-[20px] dropdown-menu-content">
                    <Link href="http://local-titanfx-adminportal.tartarus-tfx.com/ib-register" target="_blank" className="block hover:text-lime-600">
                        IB Portal
                        <span className="block uppercase text-gray-400 hover:text-lime-600">Open Account</span>
                    </Link>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default HeaderPortal;
