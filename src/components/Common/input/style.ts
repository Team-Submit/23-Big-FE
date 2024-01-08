import { color } from "@/src/styles/colors";
import { FontStyle } from "@/src/styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.Gray.scale_500};
  > label {
    ${FontStyle.BodyMedium14}
  }
`;

export const Input = styled.div`
  display: flex;
  padding: 12px;
  gap: 10px;
  align-items: center;

  background-color: ${color.Gray.scale_200};
  border: 1px solid ${color.Gray.scale_300};
  border-radius: 8px;

  > input {
    flex: 1;
    ${FontStyle.BodySemiBold16}
    background-color: transparent;
    border: none;
    &:focus {
      outline: none;
    }
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  gap: 4px;
  >p{
    ${FontStyle.BodySemiBold14}
    color: ${color.Red};
  }
`