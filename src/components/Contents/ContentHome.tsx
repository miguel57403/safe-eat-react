import { useAppSelector } from "app/store";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentH } from "components/Contents/styled";
import { CardDefault } from "components/card";
import { CardStatistic } from "components/card/CardStatistic";
import { BarGraph } from "components/graphs/Bar";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import React from "react";

export const ContentHome: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const restaurantMain = useAppSelector(
    (state) => state.restaurants.mainRestaurant
  );

  return (
    <StyledContentH {...props}>
      <FontsDefault.H2 className={"title-content"} fontsSize={32}>
        Dashboard
      </FontsDefault.H2>
      <CardDefault backgroundColor="#efdbff">
        {/* <ColumnGraph className="column-graph" /> */}
        <CardStatistic title="Registered" value={3} color="#d46b08" />
        <CardStatistic title="Preparing" value={3} color="#d4b106" />
        <CardStatistic title="Transporting" value={2} color="#0958d9" />
        <CardStatistic
          title="Delivered"
          value={restaurantMain?.deliveries?.length || 0}
          color="#389e0d"
        />
        <CardStatistic title="Cancelled" value={4} color="#cf1322" />
      </CardDefault>
      <CardDefault className="card-default-home">
        <BarGraph className="column-graph" />
        <FontsDefault.H2
          fontsSize={18}
          className="title-graph"
          fontsWeight={400}
          color="black"
        >
          Orders / hour
        </FontsDefault.H2>
      </CardDefault>
    </StyledContentH>
  );
};
