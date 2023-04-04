interface PageTitleProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export const PageTitle = ({ children, icon, className = "" }: PageTitleProps) => {
    const hasIcon = !!(icon);
    const classes = "text-xl font-light tracking-wide";

    if (!hasIcon) {
        return <h1 className={`${classes} ${className}`}>{children}</h1>;
    }

    return (
        <div className={`flex items-center justify-between ${className}`}>
            {icon}
            {children && <h1 className={`${classes}`}>{children}</h1>}
        </div>
    );
};
