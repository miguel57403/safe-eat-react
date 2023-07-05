import { ContentProducts } from "components/Contents/ContentProducts";
import { MenuContext } from "components/ContextMenu";

export const ProductsPage = () => {
  return <MenuContext children={<ContentProducts />} />;
};
