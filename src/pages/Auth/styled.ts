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
