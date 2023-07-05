import styled from "styled-components";
import { IStyledProps } from "../../interfaces/IGlobalAttribute";
import { ColorGlobal } from "./Color";

const FontH1 = styled.h1<IStyledProps>`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.fontSize || 64}px;
  color: ${(props) => props.color || ColorGlobal.green700};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 46px;
`;

const FontH5 = styled.h1<IStyledProps>`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.fontSize || 15}px;
  color: ${(props) => props.color || ColorGlobal.green700};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: 72.02%;
`;

export const Fonts = { H1: FontH1, H5: FontH5 };
