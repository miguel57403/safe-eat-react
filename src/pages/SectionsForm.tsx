import { ContentSectionsForm } from "components/Contents/ContentSectionsForm";
import { MenuContext } from "components/ContextMenu";

export const SectionsFormPage = () => {
  return <MenuContext children={<ContentSectionsForm />} />;
};
