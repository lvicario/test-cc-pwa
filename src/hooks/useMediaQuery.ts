import { useMedia } from "react-use";

// Current CC responsive breakpoints
// const tablet = 768;
// const smallDesktop = 990;
// const desktop = 1200;

// export const viewport = {
//     tablet:`(min-width: ${ tablet }px)`,
//     smallDesktop:`(min-width: ${ smallDesktop }px)`,
//     desktop:`(min-width: ${ desktop }px)`,
//     mobileOnly:`(max-width: ${ tablet - 1 }px)`,
//     tabletOnly:`(min-width: ${ tablet }px) and (max-width: ${ smallDesktop - 1 }px)`,
//     smallDesktopOnly:`(min-width: ${ smallDesktop }px) and (max-width: ${ desktop - 1 }px)`,
//     notDesktop: `(max-width: ${ desktop - 1 }px)`,
// };

// Based on tailwind responsive breakpoints
// const sm = 640; // Unused for now
const tablet = 768; // md
const desktop = 1024; // lg
const largeDesktop = 1280; // xl

export const viewport = {
    tablet:`(min-width: ${ tablet }px)`,
    desktop:`(min-width: ${ desktop }px)`,
    largeDesktop:`(min-width: ${ largeDesktop }px)`,
    mobileOnly:`(max-width: ${ tablet - 1 }px)`,
    tabletOnly:`(min-width: ${ tablet }px) and (max-width: ${ desktop - 1 }px)`,
    // desktopOnly:`(min-width: ${ desktop }px) and (max-width: ${ largeDesktop - 1 }px)`,
    notDesktop: `(max-width: ${ desktop - 1 }px)`,
    notLargeDesktop: `(max-width: ${ largeDesktop - 1 }px)`,
};

const useMediaQuery = () => {
    const isMobile = useMedia(`${viewport.mobileOnly}`, false);
    const isTablet = useMedia(`${viewport.tabletOnly}`, false);
    const isTabletAndUp = useMedia(`${viewport.tablet}`, false);
    const isDesktop = useMedia(`${viewport.desktop}`, false);
    const isLargeDesktop = useMedia(`${viewport.largeDesktop}`, false);
    const isNotDesktop = useMedia(`${viewport.notDesktop}`, false);
    const isNotLargeDesktop = useMedia(`${viewport.notLargeDesktop}`, false);

    return {
        isMobile,
        isTablet,
        isTabletAndUp,
        isDesktop,
        isLargeDesktop,
        isNotDesktop,
        isNotLargeDesktop
    };
};

export default useMediaQuery;
