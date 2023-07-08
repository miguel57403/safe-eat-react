import { FontsDefault } from "assets/fonts/Fonts";
import { FormLogin } from "components/Forms/Login";
import logo from "assets/images/logo-restaurants.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LoginPage = () => {
  return (
    <Page>
      <img src={logo} />
      <Form>
        <FormLogin className="form-content" />
      </Form>
      <FontsDefault.P1 color="white">
        Don't have an account?
        <Link color="white" className="link-form" to="/signup">
          Sign up
        </Link>
      </FontsDefault.P1>
    </Page>
  );
};

const Page = styled.div`
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

const Form = styled.div`
  width: 30%;
  min-width: 300px;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 4px 1px white;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
