import styled from "styled-components";

const DivCart = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 28%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: sticky;

  h1 {
    box-sizing: border-box;
    margin: 0;
    color: white;
    background: #27AE60;
    border-radius: 5px 5px 0px 0px;
    font-weight: 700;
    font-size: 18px;
    padding: 10px 8px;
    width: 100%;
  }

  ul {
    box-sizing: border-box;
    padding: 0 2%;
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    max-height: 340px;
    overflow-y: auto;
    margin: 0;

    h2 {
      text-align: center;
    }
  }

  @media screen and (max-width: 1200px){
    width: 38%;
  }

  @media screen and (max-width: 820px){
    width: 50%;
    max-width: 500px;
  }

  @media screen and (max-width: 540px) {
    width: 100%;

    ul {
      max-height: 240px;
    }
  }
`

export default DivCart