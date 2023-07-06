import { ContentIngredients } from "components/Contents/ContentIngredients";
import { MenuContext } from "components/ContextMenu";

export const IngredientsPage = () => {
  return <MenuContext children={<ContentIngredients />} />;
};
