import { createContext, useContext, useState, useMemo, useCallback } from "react";

interface ComponentProps {
    children: React.ReactNode;
}

export interface AppContextProps {
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
    toggleMenu: () => void;
}

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ( { children }: ComponentProps ) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen(!menuOpen);
    }, [menuOpen]);

    const memoizedValue = useMemo(() => ({
        menuOpen,
        setMenuOpen,
        toggleMenu
    }), [menuOpen]);

    return (
        <AppContext.Provider value={memoizedValue}>
            <>{children}</>
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext<AppContextProps>(AppContext);
