import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentH } from "components/Contents/styled";
import { CardDefault } from "components/card";
import { CardStatistic } from "components/card/CardStatistic";
import { BarGraph } from "components/graphs/Bar";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import React from "react";

export const ContentHome: React.FC<IGlobalAttribute> = ({ ...props }) => {
  return (
    <StyledContentH {...props}>
      <FontsDefault.H1
        color={"black"}
        className={"title-dashboard"}
        fontsSize={32}
      >
        Dashboard
      </FontsDefault.H1>
      <CardDefault backgroundColor="#efdbff">
        {/* <ColumnGraph className="column-graph" /> */}
        <CardStatistic title="Received" value={3} color="#f5222d" />
        <CardStatistic title="Preparing" value={2} color="#d48806" />
        <CardStatistic title="Transporting" value={10} color="#389e0d" />
        <CardStatistic title="Delivering" value={4} color="#1677ff" />
      </CardDefault>
      <CardDefault className="card-default-home">
        <BarGraph className="column-graph" />
        <FontsDefault.H2
          fontsSize={18}
          className="title-graph"
          fontsWeight={400}
          color="black"
        >
          Pedidos por hora
        </FontsDefault.H2>
      </CardDefault>
    </StyledContentH>
  );
};
