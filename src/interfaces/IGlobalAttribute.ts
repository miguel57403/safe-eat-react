import { IconType } from "react-icons";

export interface IGlobalAttribute {
  submitForm?: boolean;
  className?: string;
  id?: string;
  dark?: boolean;
  children?: React.ReactElement | React.ReactElement[];
  setState?: (a?: any) => void;
  onSubmit?: () => void;
  onDispatch?: any;
  antDispatch?: any;
  state?: any;
}

export interface IStyledProps {
  background?: string;
  color?: string;
  alignJustify?: "center" | "space-between" | "space-around";
  dark?: boolean;
  active?: boolean;
  fontSize?: string;
  isWrap?: boolean;
  overflow?: string;
  picture?: string;
  fontWeight?: number;
  fontColor?: string;
  marginLeft?: number;
  removePadding?: boolean;
  padding?: number;
  leftCurve?: "left" | "right";
  maxWidth?: number;
  hasBordered?: boolean;
  height?: number;
  heightTop?: number;
  heightBottom?: number;
  width?: number;
  opacity?: number;
  hasIcon?: boolean;
  isPosition?: boolean;
  contentFlex?: string;
  iconOne?: string;
  position?: string;
  iconTwo?: string;

  positionState?: {
    left: number;
    right: number;
    bottom: number;
    top: number;
    position: string;
  };
}

export interface IOptions {
  label: string;
  Icon?: React.ReactElement<IconType>;
  route: string;
}


export interface IDataLot {
  id_seed: string;
  responsable: string;
  nameOfPlantation: string;
  status: "already" | "available" | "unavailable";
}
