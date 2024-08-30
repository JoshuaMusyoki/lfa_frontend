"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

import { CustomButtonProps } from "@/types";
import ContactUs from "../contact/page";

const Button = ({
    isDisabled,
    btnType,
    containerStyles,
    textStyles,
    title,
    rightIcon,
    handleClick,
}: CustomButtonProps)=>{
    const router = useRouter();

    const handleButtonClick = () => {
        if (handleClick) {
            handleClick();
        }
        router.push('../joinus'); // Navigate to the Join Community page
    };
    return (
        <button
            disabled={isDisabled}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleButtonClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="arrow_left"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
};

export default Button;