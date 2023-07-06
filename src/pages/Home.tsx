import { ContentHome } from "components/Contents/ContentHome";
import { MenuContext } from "components/ContextMenu";

export const HomePage = () => {
  return <MenuContext children={<ContentHome />} />;
};
