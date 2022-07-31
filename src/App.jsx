import { useEffect, useState } from 'react';
import api from './services/api';
import GlobalStyle from './style/global';
import { AppStyle, Main } from './AppStyle';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ModalLoading from './components/ModalLoading';
import Cart from './components/Cart';

function App() {
  const [productsList, setProductsList] = useState([]);
  const [filterProductsList, setFilterProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get("/products")
      .then(res => {
        setProductsList(res.data);
        setFilterProductsList(res.data);
        setIsLoading(true);
      })
      .catch(err => console.error(err))
  },[]);

  useEffect(() => {
    const valueTotal = cartList.reduce((ac, { priceTotal }) => {
      return ac += priceTotal
    }, 0);
    setCartTotal(valueTotal);
    
  }, [cartList])

  const addToCart = (idProduct) => {
    const hasInCart = cartList.some(({ id }) => idProduct === id);
    
    if(hasInCart) {
      const product = cartList.find(({ id }) => id === idProduct);
      product.priceTotal += product.price;
      product.amount += 1;

      const newCartList = cartList.map((item) => {
        if (item.id === idProduct) return product;
        return item;
      })

      return setCartList(newCartList);
    }

    const { id, name, category, price, img } = productsList.find(({ id }) => id === idProduct);
    const objectCart = { id, name, category, price, priceTotal: price, img, amount: 1 }
    setCartList([...cartList, objectCart]);
  }

  const removeToCart = (idProduct = false, allProduct = true) => {

    if (!idProduct && allProduct) return  setCartList([]);

    const product = cartList.find(({ id }) => id === idProduct);

    if(allProduct || product.amount <= 1) {
      const newArr = cartList.filter(({ id }) => id !== idProduct);
      return setCartList(newArr);
    }

    product.priceTotal -= product.price;
    product.amount -= 1;
    const newArr = cartList.map(item => {
      if(item.id === idProduct) return product;
      return item
    });

    setCartList(newArr)
  }

  const showProducts = (search) => {
    const newArr = productsList.filter(({ name, category }) => name.toLowerCase().includes(search.trim()) || category.toLowerCase().includes(search.trim()));
    setFilterProductsList(newArr);
  }

  return (
    <AppStyle>
      <GlobalStyle />
      <Header showProducts={showProducts} />
      {isLoading
        ?
        <Main>
          <ProductList addToCart={addToCart} filterProductsList={filterProductsList} />
          <Cart cartTotal={cartTotal} addToCart={addToCart} removeToCart={removeToCart} cartList={cartList} />
        </Main>
        :
        <ModalLoading />}
    </AppStyle>
  );
}

export default App;
