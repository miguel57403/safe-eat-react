import { ContentRestaurants } from "components/Contents/Restaurants";
import { LayoutContainer } from "components/Layout/styled";
import { SidebarLeft } from "components/SidebarLeft";
import { SidebarRight } from "components/SidebarRight";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";

export const Layout: React.FC<IGlobalAttribute> = ({ children, ...props }) => {
  return (
    <LayoutContainer {...props}>
      <SidebarLeft />
      <ContentRestaurants children={children} />
      <SidebarRight />
    </LayoutContainer>
  );
};
