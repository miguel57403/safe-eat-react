import { ContentDeliveriesForm } from "components/Contents/ContentDeliveriesForm";
import { MenuContext } from "components/ContextMenu";

export const DeliveriesFormPage = () => {
  return <MenuContext children={<ContentDeliveriesForm />} />;
};
