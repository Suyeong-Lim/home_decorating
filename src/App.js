import React from "react";
import ReactDOM from "react-dom";

import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
