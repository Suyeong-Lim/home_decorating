import React from "react";
import ReactDOM from "react-dom";
import Contents from "./components/Contents";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Contents />
    </div>
  );
}

export default App;
