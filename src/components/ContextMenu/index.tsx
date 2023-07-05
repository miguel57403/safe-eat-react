import { ContentRestaurants } from "components/Contents/Restaurants";
import { StyledMenuContext } from "components/ContextMenu/styled";
import { MenuSafeEat } from "components/Menu";
import { Notifications } from "components/Notification";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";

export const MenuContext: React.FC<IGlobalAttribute> = ({
  children,
  ...props
}) => {
  return (
    <StyledMenuContext {...props}>
      <MenuSafeEat />
      <ContentRestaurants children={children} />
      <Notifications />
    </StyledMenuContext>
  );
};
