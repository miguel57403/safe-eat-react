import { ContentRestaurantSelect } from "components/Contents/ContentRestaurantSelect";
import { StyledLogin } from "pages/Auth/styled";

export const RestaurantSelectPage = () => {
  return <StyledLogin children={<ContentRestaurantSelect />} />;
};
