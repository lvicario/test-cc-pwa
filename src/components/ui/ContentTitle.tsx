import React from "react";

interface ComponentProps {
    children: React.ReactNode;
    className?: string;
}

export const ContentTitle = ({ className, children }: ComponentProps) => {
    return (
        <div className={`text-2xl font-medium ${className}`}>
            { children }
        </div>
    );
};
