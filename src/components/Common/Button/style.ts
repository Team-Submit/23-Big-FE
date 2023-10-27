import { color } from "@/src/styles/colors";
import { styled, css } from "styled-components";

type colorEnum = "Point100" | "Point200" | "Point300" | "Point400";

interface ButtonType {
    backgroundColor: colorEnum;
    buttonWidth?: string;
}

const PointColor = {
    Point100: {
        background: color.Main.primary_100,
        color: color.Main.primary_300,
        hoverBackground: color.Main.primary_400,
        hovercolor: color.Gray.scale_100,
    },
    Point200: {
        background: color.Main.primary_200,
        color: color.Main.primary_300,
        hoverBackground: color.Main.primary_300,
        hovercolor: color.Gray.scale_100,
    },
    Point300: {
        background: color.Main.primary_300,
        color: color.Main.primary_100,
        hoverBackground: color.Main.primary_200,
        hovercolor: color.Gray.scale_300,
    },
    Point400: {
        background: color.Main.primary_400,
        color: color.Main.primary_100,
        hoverBackground: color.Main.primary_100,
        hovercolor: color.Gray.scale_300,
    },
}

export const ButtonBackgound = styled.button<ButtonType>`

    ${({ backgroundColor }) =>
        backgroundColor === "Point100" ? css`
        background-color: ${PointColor.Point100.background};
        color: ${PointColor.Point100.color};
        &:hover{
            background-color: ${PointColor.Point100.hoverBackground};
            color: ${PointColor.Point100.color};
        };
    `:
            backgroundColor === "Point200" ? css`
        background-color: ${PointColor.Point200.background};
        color: ${PointColor.Point200.color};
        &:hover{
            background-color: ${PointColor.Point200.hoverBackground};
            color: ${PointColor.Point200.hovercolor};
        };
    `:
                backgroundColor === "Point300" ? css`
        background-color: ${PointColor.Point300.background};
        color: ${PointColor.Point300.color};
        &:hover{
            background-color: ${PointColor.Point300.hoverBackground};
            color: ${PointColor.Point300.hovercolor};
        };
    `:
                    backgroundColor === "Point400" ? css`
        background-color: ${PointColor.Point400.background};
        color: ${PointColor.Point400.color};
        &:hover{
            background-color: ${PointColor.Point400.hoverBackground};
            color: ${PointColor.Point400.hovercolor};
        };
    `: css`
        background-color: ${color.Gray.scale_400};
        color: ${color.Gray.scale_100};
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