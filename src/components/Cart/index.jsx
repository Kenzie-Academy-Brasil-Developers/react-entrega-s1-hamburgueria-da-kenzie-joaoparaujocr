import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import DivCart from "./style"

const Cart = ({ cartTotal, cartList, addToCart, removeToCart }) => (
  <DivCart>
    <h1>Carrinho de compras</h1>
    <ul>
      {cartList.length > 0 ? cartList?.map(({ id, name, category, priceTotal, amount, img }) => (
        <CartProduct addToCart={addToCart} removeToCart={removeToCart} key={id} id={id} name={name} category={category} priceTotal={priceTotal} amount={amount} img={img} />
      )) : (
        <h2>Sua sacola está vazia</h2>
      )}
    </ul>
    {cartList.length > 0 && (
      <CartTotal removeToCart={removeToCart} cartTotal={cartTotal} />
    )}
  </DivCart>
)

export default Cart;