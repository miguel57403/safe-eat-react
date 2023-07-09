import { ContentHome } from "components/Contents/ContentHome";
import { Layout } from "components/Layout";

export const HomePage = () => {
  return <Layout children={<ContentHome />} />;
};
