import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); //render our component twice to check for bugs and if we are using up to date

//React before v18
//React.render(<App />),ocument.getElementById("root");
