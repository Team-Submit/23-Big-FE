import { color } from "@/src/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
  width: 128px;
  background-color: ${color.Gray.scale_200};
  border-radius: 12px;
  border: 1px solid ${color.Gray.scale_300};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const ListItemCotainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  cursor: pointer;
  > p {
    color: ${color.Gray.scale_800};
  }
  &:hover {
    background-color: ${color.Gray.scale_300};
  }
`;
