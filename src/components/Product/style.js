import styled from "styled-components";

const ItemProduct = styled.li`
  width: calc((100% / 3) - 7px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #E0E0E0;
  border-radius: 5px;
  box-sizing: border-box;

  .imgContainer {
    height: 200px;
    background-color: #F5F5F5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({ img }) => img});
    width: 100%;
  }

  .textContainer {
    display: flex;
    width: auto;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px;
    gap: 14px;

    h2 {
      font-weight: 700;
      font-size: 18px;
      color: #333333;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      color: #828282;
    }

    p {
      font-weight: 600;
      font-size: 14px;
      color: #27AE60;
    }

    button {
      background: #27AE60;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      color: white;
      padding: 10px 5px;

      &:hover {
        background-color: #1e7844;
      }
    }

  }

  @media screen and (max-width: 900px){
    width: calc((100% / 2) - 7px);

    .imgContainer {
      height: 130px;
    }
  }

  @media screen and (max-width: 820px) {
    min-width: 140px;
    height: 250px;

    .textContainer {
      padding: 5px;
      gap: 0;

      h2 { font-size: 12px; }
    }
  }
`

export default ItemProduct;