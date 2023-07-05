import { StyledContentRestaurant } from "components/Contents/styled";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import React from "react";

export const ContentRestaurants: React.FC<IGlobalAttribute> = ({
  children,
  ...props
}) => {
  return (
    <StyledContentRestaurant {...props}>{children}</StyledContentRestaurant>
  );
};
