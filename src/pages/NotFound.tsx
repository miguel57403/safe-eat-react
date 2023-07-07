import { ContentNotFound } from "components/Contents/ContentNotFound";
import { MenuContext } from "components/ContextMenu";

export const NotFoundPage = () => {
  return <MenuContext children={<ContentNotFound />} />;
};
