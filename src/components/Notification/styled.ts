import { styled } from "styled-components";

export const StyledNotification = styled.div`
  width: 13%;
  min-width: 250px;
  max-width: 300px;
  height: calc(100vh - 20px);
  overflow-y: auto;
  padding-right: 8px;

  .title-notification {
    padding: 10px 0;
  }
  .card-notification {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;
