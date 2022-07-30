import { Container, ButtonRemove } from "./style";

const CartTotal = ({ cartTotal, removeToCart }) => (
  <>
    <Container>
      <p>Preço total</p>
      <p>{cartTotal.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      })}</p>
    </Container>
    <ButtonRemove onClick={() => removeToCart()}>Remover Todos</ButtonRemove>
  </>
)

export default CartTotal