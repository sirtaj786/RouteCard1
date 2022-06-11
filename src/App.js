import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import Men from "./pages/Men";
import Item from "./pages/Item";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/jewelery" element={<Jewelery />}></Route>
        <Route path="men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="cart/" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;