import { styled } from "styled-components";

export const StyledLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #22075e;

  .footer-content > p {
    display: flex;
    gap: 5px;
  }

  .footer-content > p > .link-form {
    color: white;
  }
`;

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

export const Form = styled.div`
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
