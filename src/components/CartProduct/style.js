import styled from "styled-components";

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  .img {
    background: #E0E0E0;
    background-image: url(${({ img }) => img});
    width: 30%;
    background-position: center;
    background-repeat: no-repeat;
    height:90px;
    background-size: 90%;
    border-radius: 5px;
  }

  .info {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      text-align: left;
      font-weight: 700;
      font-size: 14px;
      word-break: break-word;
    }

    > span {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #828282;
      margin-bottom: 10px;
    }

    .controlAmont {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 45%;

      .btnAdd, .btnRemove {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
      }

      .btnAdd {
        background-color: green;
      }

      .btnRemove {
        background-color: red;
      }
    }
  }

  > button {
      background-color: #828282;
      color: white;
      border-radius: 4px;
      border: none;
      padding: 4px 8px;
      cursor: pointer;
    }
`

export default Li