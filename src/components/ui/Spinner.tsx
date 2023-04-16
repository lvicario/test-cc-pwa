interface SpinnerProps {
    color?: "dark" | "light";
    className?: string;
}

export const Spinner = ({ color = "light", className }: SpinnerProps) => {
    const renderDiv = () => {
        const divs: React.ReactNode[] = [];
        for (let i = 0; i < 13; i++) {
            divs.push(<div key={i}></div>);
        }

        return divs;
    };

    return (
        <div className={`lds-spinner ${color} ${className}`}>
            {renderDiv()}
        </div>
    );
};
