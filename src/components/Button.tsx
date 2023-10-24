"use client"
import { styled, css } from "styled-components"
import { color } from "../styles/colors";
import { Txt } from "./Txt";

type colorEnum = "Point100" | "Point200" | "Point300" | "Point400";

interface ButtonProps {
    text: string;
    buttonColor: colorEnum;
    width?: string;
    disable: false;
}

interface ButtonType {
    backgroundColor: string;
    buttonWidth?: string;
}

export const Button = ({ text, buttonColor, width, disable }: ButtonProps) => {
    return (
        <ButtonBackgound backgroundColor={buttonColor} buttonWidth={width} disabled={disable}>
            <Txt typography="HeadingBold18">{text}</Txt>
        </ButtonBackgound>
    );
}

const ButtonBackgound = styled.button<ButtonType>`

    ${({ backgroundColor }) =>
        backgroundColor === "Point100" ? css`
        background-color: ${color.Main.primary_100};
        color: ${color.Main.primary_300};
        &:hover{
            background-color: ${color.Main.primary_400};
            color: ${color.Gray.scale_100};
        };
    `:
            backgroundColor === "Point200" ? css`
        background-color: ${color.Main.primary_200};
        color: ${color.Main.primary_300};
        &:hover{
            background-color: ${color.Main.primary_300};
            color: ${color.Gray.scale_100};
        };
    `:
                backgroundColor === "Point300" ? css`
        background-color: ${color.Main.primary_300};
        color: ${color.Gray.scale_100};
        &:hover{
            background-color: ${color.Main.primary_200};
            color: ${color.Gray.scale_300};
        };
    `:
                    backgroundColor === "Point400" ? css`
        background-color: ${color.Main.primary_400};
        color: ${color.Gray.scale_100};
        &:hover{
            background-color: ${color.Main.primary_100};
            color: ${color.Gray.scale_300};
        };
    `: css`
        background-color: ${color.Main.primary_400};
        color: ${color.Gray.scale_100};
        &:hover{
            background-color: ${color.Main.primary_100};
            color: ${color.Gray.scale_300};
        };
    `};

    border: none;
    border-radius: 12px;
    width: ${({ buttonWidth }) =>
        buttonWidth === "" ?
            "100%" : buttonWidth
    };
    padding: 13px;
    
    &:disabled{
        background-color: ${color.Gray.scale_400};
        color: ${color.Gray.scale_100};
    }
`;