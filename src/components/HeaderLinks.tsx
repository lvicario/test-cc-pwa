import Image from 'next/image';
import Link from 'next/link';

// Imgs
import helpIcon from "@/assets/img/icons/help.svg";
import contactIcon from "@/assets/img/icons/contact.svg";

const HeaderLinks = () => {
    // classes inside and out of the header
    const positioningClasses = "w-full h-14 bg-[#313131] group-[.header]:w-auto group-[.header]:h-auto group-[.header]:bg-transparent"

    return (
        <div className={`flex gap-x-5 md:gap-x-8 justify-center text-white text-xs md:text-sm ${positioningClasses}`}>
            <Link href="https://titanfx.zendesk.com/hc/en-us" target="_blank" className="flex items-center gap-x-2 hover:text-primary">
                <Image src={helpIcon} width="23" height="23" alt="" />
                <span>Help</span>
            </Link>
            <Link href="https://titanfx.com/contact-titan-fx" target="_blank" className="flex items-center gap-x-2 hover:text-primary">
                <Image src={contactIcon} width="23" height="23" alt="" />
                <span>Contact</span>
            </Link>
        </div>
    );
};

export default HeaderLinks;
