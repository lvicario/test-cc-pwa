import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

// Imgs
import iconDashboard from "@/assets/img/icons/dashboard.svg";
import iconWithdraw from "@/assets/img/icons/withdraw.svg";
import iconDeposit from "@/assets/img/icons/deposit.svg";
import iconReferFried from "@/assets/img/icons/refer-a-friend.svg";
import iconVpsDetails from "@/assets/img/icons/hdd-solid.svg";
import iconTradingCentral from "@/assets/img/icons/trading-central.svg";
import iconPromotion from "@/assets/img/icons/promotion.svg";

const MainMenu = () => {
    const linkClasses = "flex gap-x-3 pl-8 pr-3 py-4 bg-primary hover:bg-primary-dark hover:border-r-[5px] hover:border-r-primary-bright";
    const activeClasses = "bg-primary-dark border-r-[5px] border-r-primary-bright group active";
    const activeSvgClasses = "group-[.active]:w-8";

    return (
        <div className="mt-10 text-white">
            <ActiveLink activeClassName={activeClasses} className={linkClasses} href="/dashboard">
                <Image src={iconDashboard} width="31" height="24" alt="" />
                <span>Dashboard</span>
            </ActiveLink>
            <ActiveLink  activeClassName={activeClasses} className={linkClasses} href="/withdraw">
                <Image src={iconWithdraw} width="29" height="30" alt="" />
                <span>Withdraw</span>
            </ActiveLink>
            <ActiveLink  activeClassName={activeClasses} className={linkClasses} href="/deposit">
                <Image src={iconDeposit} width="29" height="30" alt="" />
                <span>Deposit</span>
            </ActiveLink>
            <ActiveLink  activeClassName={activeClasses} className={linkClasses} href="/refer-a-friend">
                <Image src={iconReferFried} width="29" height="24" alt="" />
                <span>Refer a Friend</span>
            </ActiveLink>
            <ActiveLink  activeClassName={activeClasses} className={linkClasses} href="/vps-details">
                <Image src={iconVpsDetails} width="31" height="27" alt="" />
                <span>VPS Details</span>
            </ActiveLink>
            <ActiveLink  activeClassName={activeClasses} className={linkClasses} href="/trading-central">
                <Image src={iconTradingCentral} width="28" height="29" alt="" />
                <span>Trading Central</span>
            </ActiveLink>
            <ActiveLink  activeClassName={activeClasses} className={linkClasses} href="/promotion">
                <Image src={iconPromotion} width="23" height="23" alt="" />
                <span>Promotions</span>
            </ActiveLink>
        </div>
    );
};

export default MainMenu;
