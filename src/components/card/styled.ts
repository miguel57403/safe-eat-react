import { IStyledProps } from "interfaces/IGlobalAttribute";
import { styled } from "styled-components";

export const StyledCard = styled.div<IStyledProps>`
  padding: 10px;
  background-color: ${(props) => props.background};
  height: ${(props) => props.height}%;
  border-radius: 8px;
  display: grid;
  gap: 10px;
  grid-template-columns: auto auto auto auto;
`;
