import { color } from "@/src/styles/colors";
import styled from "styled-components";

export const Container = styled.div<{ success: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  path {
    fill: ${({ success }) => (success ? color.Black : color.Gray.scale_500)};
  }
`;
