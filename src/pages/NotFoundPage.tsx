import { ContentNotFound } from "components/Contents/ContentNotFound";
import { Layout } from "components/Layout";

export const NotFoundPage = () => {
  return <Layout children={<ContentNotFound />} />;
};
