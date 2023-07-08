import { ContentOrdersForm } from "components/Contents/ContentOrdersForm";
import { MenuContext } from "components/ContextMenu";

export const OrdersFormPage = () => {
  return <MenuContext children={<ContentOrdersForm />} />;
};
