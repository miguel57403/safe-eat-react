import { FontsDefault } from "assets/fonts/Fonts";
import { StyleContentL } from "components/Contents/styled";
import { FormLogin } from "components/Forms/Login";

export const ContentLogin = () => {
  return (
    <StyleContentL>
      <FontsDefault.H2 color="white" fontsSize={45} className="logo-content">
        <p>SafeEat</p>
        <i>RESTAURANTS</i>
      </FontsDefault.H2>

      <FormLogin className="form-content" />
    </StyleContentL>
  );
};
