import logo from "./logo.svg";
import "./App.css";
import { Mainroutes } from "./router/Mainroutes";
import Otp from "./components/Auth/Otp";
// import ProductPage from "./components/Pages/Product page/ProductPage"

function App() {
  return (
    <div className="App">
      <Mainroutes />
    </div>
  );
}

export default App;
