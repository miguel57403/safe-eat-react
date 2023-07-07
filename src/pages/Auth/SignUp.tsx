import { FontsDefault } from "assets/fonts/Fonts";
import { ContentSignUp } from "components/Contents/ContentSignUp";
import { StyledLogin } from "pages/Auth/styled";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <StyledLogin>
      <ContentSignUp />
      <div className="footer-content">
        <FontsDefault.P1 color="white">
          Already have an account?{" "}
          <Link color="white" className="link-form" to="/login">
            Login
          </Link>
        </FontsDefault.P1>
      </div>
    </StyledLogin>
  );
};
