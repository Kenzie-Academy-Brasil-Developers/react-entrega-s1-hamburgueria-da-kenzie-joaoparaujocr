import ItemProduct from "./style"

const Product = ({ addToCart, id, name, category, price, img }) => (
  <ItemProduct img={img}>
    <div className="imgContainer"></div>
    <div className="textContainer">
    <h2>{name}</h2>
    <span>{category}</span>
    <p>{price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })}</p>
    <button onClick={() => addToCart(id)}>Adicionar</button>
    </div>
  </ItemProduct>
)

export default Product