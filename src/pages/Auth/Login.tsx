import { FontsDefault } from "assets/fonts/Fonts";
import { ContentLogin } from "components/Contents/ContentLogin";
import { StyledLogin } from "pages/Auth/styled";

export const LoginPage = () => {
  return (
    <StyledLogin>
      <ContentLogin />
      <div className="footer-content">
        <FontsDefault.P1 color="white">
          Don't have an account? Sign up
        </FontsDefault.P1>
      </div>
    </StyledLogin>
  );
};
