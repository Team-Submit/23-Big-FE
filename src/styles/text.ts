import { styled, css } from "styled-components";
import { FontStyle, fontsKeyOfType } from "./fonts";

export const Text = styled.p<{ fontStyle: fontsKeyOfType }>`
  ${({ fontStyle }) => css`
    font-weight: ${FontStyle[fontStyle].fontWeight};
    font-size: ${FontStyle[fontStyle].fontSize};
    font-family: ${FontStyle[fontStyle].fontFamily};
    line-height: ${FontStyle[fontStyle].lineHeight};
  `}
`;
