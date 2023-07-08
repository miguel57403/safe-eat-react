import { ContentProfileForm } from "components/Contents/ContentProfileForm";
import { MenuContext } from "components/ContextMenu";

export const ProfileFormPage = () => {
  return <MenuContext children={<ContentProfileForm />} />;
};
