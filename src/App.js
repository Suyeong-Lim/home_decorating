import React from "react";
import ReactDOM from "react-dom";

import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  //state 불러올때 useSelector
  useSelector();
  //state 바꿀때 use Dispatch
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(
      "https://cdn.ggumim.co.kr/test/image_product_link.json"
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
