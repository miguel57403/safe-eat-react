import { ContentSections } from "components/Contents/ContentSections";
import { MenuContext } from "components/ContextMenu";

export const SectionsPage = () => {
  return <MenuContext children={<ContentSections />} />;
};
