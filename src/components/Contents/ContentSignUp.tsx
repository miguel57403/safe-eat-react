import { StyleContentL } from "components/Contents/styled";
import { FormSignUp } from "components/Forms/FormSignUp";
import logo from "assets/images/logo-restaurants.svg";

export const ContentSignUp = () => {
  return (
    <StyleContentL>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#722ed1",
          padding: "32px 12px",
          borderRadius: "8px",
        }}
      >
        <img src={logo} style={{ padding: "12px", width: "200px" }} />
      </div>

      <FormSignUp className="form-content" />
    </StyleContentL>
  );
};
