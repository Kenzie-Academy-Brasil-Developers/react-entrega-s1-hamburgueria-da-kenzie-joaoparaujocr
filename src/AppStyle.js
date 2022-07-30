import styled from "styled-components";

export const AppStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
`
export const Main = styled.main`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1240px) {
    padding: 0 2%;
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`