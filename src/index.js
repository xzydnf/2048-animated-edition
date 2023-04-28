import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "./styles.scss";
import BoardView from "./components/Board";

const App = () => {
  return <BoardView />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
