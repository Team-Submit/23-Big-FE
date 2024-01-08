import { color } from "@/src/styles/colors";
import { FontStyle } from "@/src/styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px 12px 0px 0px;
  width: 196px;
  cursor: pointer;
  position: relative;

  > img {
    border-radius: 12px;

    width: 193px;
    height: 193px;
  }
`;

export const DescriptionContainer = styled.div<{ success: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ success }) => (success ? color.Gray.scale_500 : color.Black)};
`;
export const PricePlaceContainer = styled.div<{ success: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p:last-child {
    ${FontStyle.BodyMedium14};
    color: ${({ success }) =>
      success ? color.Gray.scale_400 : color.Main.primary_300};
  }
`;

export const EctContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 12px;
  top: 12px;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
  > svg {
    width: 12px;
    height: 12px;
  }
`;

export const MoreContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
  background-color: ${color.Gray.scale_200};
  border:1px sokid ${color.Gray.scale_300};
  top: 20px;
  right: -24px;
  transform: translate(-100%, 0%);
`