import React from "react";

interface ComponentProps {
    children: React.ReactNode;
}

export const ContentBox = ({ children }: ComponentProps) => {
    return (
        <div className="my-5 py-5 px-5 drop-shadow-[0_0_22px_rgb(232,232,232)] border border-[#eaeaea] bg-white">
            { children }
        </div>
    );
};
