import { StyleContentL } from "components/Contents/styled";
import { FormLogin } from "components/Forms/Login";
import logo from "assets/images/logo-restaurants.svg";

export const ContentLogin = () => {
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

      <FormLogin className="form-content" />
    </StyleContentL>
  );
};
