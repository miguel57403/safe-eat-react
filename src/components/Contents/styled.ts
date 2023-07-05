import { styled } from "styled-components";

export const StyledContentRestaurant = styled.div`
  flex-grow: 1;
  background-color: lightgray;
`;

export const StyledContentP = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;

  .search-content,
  .title-content,
  .table-content {
    padding: 10px;
  }

  .search-content,
  .title-content,
  .info-content,
  .table-content {
    border-radius: 8px;
  }

  .title-content {
    text-align: center;
    background-color: green;
  }

  .search-content {
    background-color: red;
    gap: 10px;
    display: flex;
  }
  .info-content {
    background-color: blue;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .actions {
      display: flex;
      gap: 10px;
    }
  }
  .table-content {
    background-color: yellow;
  }
`;
