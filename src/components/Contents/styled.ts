import { styled } from "styled-components";

export const StyledContentRestaurant = styled.div`
  flex-grow: 1;
  background-color: white;
  border-radius: 8px;
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
    border-radius: 0;
    border-bottom: 2px solid darkgray;
  }

  .search-content {
    gap: 10px;
    display: flex;
  }
  .info-content {
    display: flex;
    background-color: #efdbff;
    justify-content: space-between;
    padding: 10px;

    .actions {
      display: flex;
      gap: 10px;
    }
  }
  .table-content {
    * {
      color: black;
    }
  }
`;

export const StyledContentH = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  height: 100%;

  .title-dashboard {
    border-bottom: 2px solid lightgray;
    width: 100%;
    padding: 10px;
  }

  .title-graph {
    padding: 10px;
    justify-content: center;
  }

  .card-default-home {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    flex-grow: 1;
  }
`;
