import "./index.css";
import Header, { CartBasket } from "./header";
import Content from "./Content";

function App() {
  return (
    <div className="container">
    <Header />
    <CartBasket />
    <Content />
    </div>
  );
}

export default App;
