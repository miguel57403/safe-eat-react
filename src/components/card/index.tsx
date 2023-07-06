import { StyledCard } from "components/card/styled";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import React from "react";

interface ICard extends IGlobalAttribute {
  backgroundColor?: string;
  height?: number;
}

export const CardDefault: React.FC<ICard> = ({
  children,
  backgroundColor,
  height,
  ...props
}) => {
  return (
    <StyledCard {...props} {...{ background: backgroundColor, height }}>
      {children}
    </StyledCard>
  );
};
