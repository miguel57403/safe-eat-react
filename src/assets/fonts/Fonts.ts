import styled from "styled-components";
import { ColorGlobal } from "./Color";

interface IPropsFonts {
  fontsSize?: number;
  fontsWeight?: number;
  color?: string;
}

const H1 = styled.h1<IPropsFonts>`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontsWeight || 600};
  font-size: ${(props) => props.fontsSize || 24}px;
  color: ${(props) => props.color || ColorGlobal.green700};
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
  align-items: center;
  text-align: left;
  text-indent: 0;
`;

const H2 = styled.h1<IPropsFonts>`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: ${(props) => props.color || ColorGlobal.green700};
  padding: 0;
  margin: 0;
  align-items: center;
  text-indent: 0;

  font-weight: ${(props) => props.fontsWeight || 600};
  font-size: ${(props) => props.fontsSize || 55}px;
  line-height: 1;
  display: flex;
  align-items: center;
  text-align: center;
`;

const H3 = styled.h3<IPropsFonts>`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || ColorGlobal.green700};
  font-weight: ${(props) => props.fontsWeight || 700};
  font-size: ${(props) => props.fontsSize || 19}px;
  text-indent: 0;
  display: flex;
  line-height: 1;
  align-items: center;
`;

const H6 = styled.h3<IPropsFonts>`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  padding: 0;
  margin: 0;
  color: ${(props) => props.color || ColorGlobal.green700};
  font-weight: ${(props) => props.fontsWeight || 100};
  font-size: ${(props) => props.fontsSize || 16}px;
  line-height: 1;
  text-indent: 0;
  display: flex;
  align-items: center;

  line-height: 21px;
  display: flex;
  text-align: center;
`;

export const P1 = styled.p<IPropsFonts>`
  color: ${(props) => props.color || ColorGlobal.green700};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontsWeight || 400};
  font-size: ${(props) => props.fontsSize || 15}px;
  margin: 0;
  text-indent: 0;
  padding: 0;
  /* or 9px */

  line-height: 1;
  display: flex;
  align-items: center;
`;

export const Link = styled.a<IPropsFonts>`
  text-decoration: none;
  margin: 0;
  padding: 0;

  color: ${(props) => props.color || ColorGlobal.green700};
  transition: ease-in-out 0.5s all;
`;

export const FontsDefault = {
  H6,
  H3,
  H2,
  H1,
  P1,
  Link,
};
