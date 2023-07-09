import { ContentOrders } from "components/Contents/ContentOrders";
import { MenuContext } from "components/ContextMenu";

export const OrdersPage = () => {
  return <MenuContext children={<ContentOrders />} />;
};
