import styled from "styled-components";

const Modal = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .bullet {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #27AE60;
    animation: loading 1s ease-in-out infinite alternate;

    &:nth-child(1) { animation-delay: -0.4s }
    &:nth-child(2) { animation-delay: -0.2s }
  }

  @keyframes loading {
    from {transform: translateY(-100%)}
    to {transform: translateY(100%)}
  }
`

export default Modal