import Li from "./style"

const CartProduct = ({ addToCart, removeToCart, id, name, category, amount, img }) => (
  <Li img={img}>
    <div className="img"></div>
    <div className="info">
      <h2>{name}</h2>
      <span>{category}</span>
      <div className="controlAmont">
        <button className="btnRemove" onClick={() => removeToCart(id, false)}>-</button>
        <span>{amount}</span>
        <button className="btnAdd" onClick={() => addToCart(id) }>+</button>
      </div>
    </div>
    <button onClick={() => removeToCart(id)}>Remover</button>
  </Li>
)

export default CartProduct