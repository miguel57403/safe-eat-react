import { ContentProductsForm } from "components/Contents/ContentProductsForm";
import { MenuContext } from "components/ContextMenu";

export const ProductsFormPage = () => {
  return <MenuContext children={<ContentProductsForm />} />;
};
