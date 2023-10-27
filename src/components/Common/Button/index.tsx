"use client"
import * as S from "./style";
import { Txt } from "../Text";

type colorEnum = "Point100" | "Point200" | "Point300" | "Point400";

interface ButtonProps {
    text: string;
    buttonColor: colorEnum;
    width?: string;
    disable: false;
}

export const Button = ({ text, buttonColor, width, disable }: ButtonProps) => {
    return (
        <S.ButtonBackgound backgroundColor={buttonColor} buttonWidth={width} disabled={disable}>
            <Txt typography="HeadingBold18">{text}</Txt>
        </S.ButtonBackgound>
    );
}