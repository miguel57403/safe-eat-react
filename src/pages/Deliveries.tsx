import { ContentDeliveries } from "components/Contents/ContentDeliveries";
import { MenuContext } from "components/ContextMenu";

export const DeliveriesPage = () => {
  return <MenuContext children={<ContentDeliveries />} />;
};
