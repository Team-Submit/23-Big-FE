import { styled, css } from "styled-components";
import { color } from "@/src/styles/colors";
import { FontStyle } from "./fonts";

type colorEnum = "Main" | "Sub";

interface ButtonType {
  backgroundColor: colorEnum;
  buttonWidth?: string;
}

export const Button = styled.button<ButtonType>`
  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${PointColor[backgroundColor].background};
          color: ${PointColor[backgroundColor].color};
          &:active {
            background-color: ${PointColor[backgroundColor].activeBackground};
          }
        `
      : css`
          background-color: ${color.Gray.scale_400};
          color: ${color.Gray.scale_100};
        `};

  cursor: pointer;
  border: none;
  border-radius: 12px;
  width: ${({ buttonWidth }) => (buttonWidth ? buttonWidth : "100%")};
  padding: 13px;

  &:disabled {
    background-color: ${color.Gray.scale_400};
    color: ${color.Gray.scale_100};
    cursor: no-drop;
  }

  ${FontStyle.HeadingSemiBold18};
`;

const PointColor = {
  Main: {
    background: color.Main.primary_300,
    color: color.Gray.scale_100,
    activeBackground: color.Main.primary_400,
  },
  Sub: {
    background: color.Main.primary_100,
    color: color.Main.primary_300,
    activeBackground: color.Main.primary_200,
  },
};
