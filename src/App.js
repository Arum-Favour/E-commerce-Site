import "./index.css";
import Header from "./header";
import Content from "./Content";
import CartItem from "./CartItem";
import { MyContext } from "./MyContext";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="container">
      <MyContext.Provider value={{ cartItems,setCartItems }}>
        <Header />
        <Content />
      </MyContext.Provider>
    </div>
  );
}

export default App;
