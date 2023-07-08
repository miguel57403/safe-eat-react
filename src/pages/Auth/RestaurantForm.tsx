import { styled } from "styled-components";
import { FormRestaurant } from "components/Forms/FormRestaurant";
import { FontsDefault } from "assets/fonts/Fonts";

export const RestaurantNewPage = () => {
  return (
    <Page>
      <FontsDefault.H2 fontsSize={32} color="white">
        New Restaurant
      </FontsDefault.H2>
      <FormRestaurant />
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
