import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}>
         
        </Route>
        <Route path="/cart" element={<Cart />}>
          
        </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;