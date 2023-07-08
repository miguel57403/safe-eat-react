import { styled } from "styled-components";
import { FormRestaurant } from "components/Forms/Restaurant";
import { FontsDefault } from "assets/fonts/Fonts";

export const RestaurantNewPage = () => {
  return (
    <Page>
      <FontsDefault.H2 fontsSize={32} color="white">
        New Restaurant
      </FontsDefault.H2>
      <Form>
        <FormRestaurant />
      </Form>
    </Page>
  );
};

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #22075e;

  & .link-form {
    margin-left: 5px;
  }
  & .link-form:visited {
    color: lightgray;
  }

  & > img {
    width: 200px;
  }
`;

export const Form = styled.div`
  max-width: 800px;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 4px 1px white;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
