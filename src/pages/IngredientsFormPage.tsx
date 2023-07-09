import { ContentIngredientsForm } from "components/Contents/ContentIngredientsForm";
import { MenuContext } from "components/ContextMenu";

export const IngredientsFormPage = () => {
  return <MenuContext children={<ContentIngredientsForm />} />;
};
