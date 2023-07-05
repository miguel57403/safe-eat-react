import { styled } from "styled-components";

export const StyleMenu = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-right: 1px solid #cececa;
  padding: 10px;
  background-color: white;
  gap: 10px;
  border-radius: 8px;

  .logo-menu {
    display: flex;
    border-radius: 8px;
    background-color: darkgray;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    line-height: 1.1;
    padding: 10px;
  }

  .logo-menu p {
    margin: 0;
    padding: 0;
  }

  .logo-menu p:first-child {
    font-size: 36px;
  }

  .section-menu {
    flex-grow: 1;
  }

  .footer-menu {
    height: 80px;
    background-color: darkgray;
    border-radius: 8px;
    gap: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
  }
`;
