import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import Main from "./pages/Main";
import { productActions } from "./store/store";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  //state 바꿀때 use Dispatch
  const dispatch = useDispatch();
  //state 불러올때 useSelector

  //1. state 불러오기
  const productInfo = useSelector((state) => state.productInfo);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://cdn.ggumim.co.kr/test/image_product_link.json"
      );
      const data = await response.json();
      //2. state 에 값 넣어줌
      dispatch(productActions.product(data));
    };

    getData();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
