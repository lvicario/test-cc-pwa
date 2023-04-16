import { useMeasure } from "react-use";
import Link, { LinkProps } from "next/link";
import { Spinner } from "./Spinner";

type VariantTypes = "btn-primary" | "btn-secondary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-light";

interface ComponentProps extends LinkProps {
    variant?: VariantTypes;
    iconClasses?: string;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    withDisabledInitially?: boolean;
    withDisabledInitiallyCondition?: boolean;
    isTouched?: boolean;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export const Button = ({
    as,
    variant = "btn-primary",
    iconClasses = "",
    iconPosition,
    className = "",
    isLoading,
    disabled,
    withDisabledInitially,
    withDisabledInitiallyCondition,
    isTouched,
    children,
    ...otherProps
}: ComponentProps) => {
    const [ref, { width, height }] = useMeasure();

    const spinnerStyle = {
        display: "block",
        width,
        height
    };

    const CustomTag = as ? as : Link;

    const getVariantClass = () => {
        const disabledClasses = "btn-light cursor-default";

        if (disabled) {
            return disabledClasses;
        }

        if (!withDisabledInitially || (isTouched && withDisabledInitiallyCondition)) {
            return variant;
        }

        return disabledClasses;
    };

    const disabledProp = {
        disabled: isLoading || disabled || (withDisabledInitially && (!isTouched || !withDisabledInitiallyCondition))
    };

    return (
        // @ts-ignore:next-line
        <CustomTag {...otherProps} {...disabledProp} ref={ref} className={`btn ${getVariantClass()} ${className}`}>
            {isLoading
                ? <div style={spinnerStyle} className="text-[4.5px]"><Spinner  /></div>
                : (
                    <>
                        {children && children}
                    </>
                )
            }
        </CustomTag>
    );
};
