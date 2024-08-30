import { MouseEventHandler } from "react";

export interface LFAProps {

}

export interface FilterProps {

}

export interface HomeProps {

}

export interface LFACardProps {

}

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: () => void;
}

export interface OptionProps {
    title: String;
    value: String;
}

export interface CustomFilterProps {
    title: String;
    options: OptionProps[];
}

export interface ShowMoreProps {
    phoneNumber: number;
    isNext: Boolean;
}

export interface SearchContributorsProps {

}



