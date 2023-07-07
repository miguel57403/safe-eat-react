import { FontsDefault } from "assets/fonts/Fonts";
import { StyleContentL } from "components/Contents/styled";
import { FormLogin } from "components/Forms/Login";
import { FormSignUp } from "components/Forms/SignUp";

export const ContentSignUp = () => {
  return (
    <StyleContentL>
      <FontsDefault.H2 color="white" fontsSize={45} className="logo-content">
        <p>SafeEat</p>
        <i>RESTAURANTS</i>
      </FontsDefault.H2>

      <FormSignUp className="form-content" />
    </StyleContentL>
  );
};
