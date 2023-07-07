import { IStyledProps } from "interfaces/IGlobalAttribute";
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

export const StyleContentL = styled.div<IStyledProps>`
  width: 40%;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 4px 1px white;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;

  * {
    transition: ease-in-out 0.3s all;
  }

  .logo-content {
    display: flex;
    border-radius: 8px;
    background-color: #722ed1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
  }

  .form-content {
    width: 100%;
    margin: 0 auto;
  }
`;
