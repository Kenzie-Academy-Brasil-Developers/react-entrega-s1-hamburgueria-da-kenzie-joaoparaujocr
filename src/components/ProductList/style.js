import styled from "styled-components";

const UnorderedLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  list-style-type: none;
  padding: 30px 0;
  gap: 10px;
  margin: 0;
  box-sizing: border-box;
  

  @media screen and (max-width: 1200px){
    width: 60%;
  }

  @media screen and (max-width: 820px) {
    max-height: 400px;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 540px) {
    flex-direction: row;
    width: auto;
    flex-wrap: nowrap;
    overflow-y: auto;
    gap: 2px;
    flex-grow: 0;
    justify-content: none;
    align-items: center;
    justify-content: flex-start;
  }
`

export default UnorderedLists