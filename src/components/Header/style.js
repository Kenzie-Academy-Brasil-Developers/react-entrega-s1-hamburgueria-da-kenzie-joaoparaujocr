import styled from "styled-components";

export const HeaderStyle = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 2%;
  background-color: #F5F5F5;
`

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    background-color: white;
    height: 60px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    max-width: 365px;
    padding: 0 10px;

    input {
      width: auto;
      font-size: 16px;
      height: 90%;
      outline: none;
      border: none;
      border-radius: 8px;

      &::placeholder {
        color: #E0E0E0;
      }
    }

    button {
      cursor: pointer;
      padding: 10px 20px;
      font-size: 14px;
      background-color: #27AE60;
      color: white;
      border-radius: 8px;
      border: none;

      &:hover {
        background-color: #1e7844;
      }
    }
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;

    > div {
      height: 45px;
      margin-top: 20px;
      max-width: 100%;
      width: 100%;
      padding: 2% 0;

      input {
        width: 100%;
        padding-left: 7px;
      }

      button {
        margin-right: 10px;
      }
    }
  }
`