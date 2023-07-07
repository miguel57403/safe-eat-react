import { FontsDefault } from "assets/fonts/Fonts";
import { ContentLogin } from "components/Contents/ContentLogin";
import { StyledLogin } from "pages/Auth/styled";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <StyledLogin>
      <ContentLogin />
      <div className="footer-content">
        <FontsDefault.P1 color="white">
          Don't have an account?{" "}
          <Link color="white" className="link-form" to="/signup">
            Sign up
          </Link>
        </FontsDefault.P1>
      </div>
    </StyledLogin>
  );
};
