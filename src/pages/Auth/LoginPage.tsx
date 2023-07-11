import { FontsDefault } from "assets/fonts/Fonts";
import logo from "assets/images/logo-restaurants.svg";
import { FormLogin } from "components/Forms/FormLogin";
import { Form, Page } from "pages/Auth/styled";
import { Link } from "react-router-dom";

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
