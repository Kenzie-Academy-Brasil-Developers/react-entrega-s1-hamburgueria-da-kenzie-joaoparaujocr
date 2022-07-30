import Product from "../Product";
import UnorderedLists from "./style";

const ProductList = ({ addToCart, filterProductsList }) => (

  <UnorderedLists>
    { filterProductsList.length > 0
      ? 
        filterProductsList?.map(({ id, name, category, price, img }) => 
        <Product addToCart={addToCart} key={id} id={id} name={name} category={category} price={price} img={img} />)
      :
        <h1>Lista Vazia</h1>}
  </UnorderedLists>
)

export default ProductList