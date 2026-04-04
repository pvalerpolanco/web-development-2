import Home from "./Home";
import About from "./About";
import Products from "./Products";
import MyForm from "./MyForm";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

function MyNav() {
  return (
    <HashRouter>
      <SetNav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="form" element={<MyForm />} />
      </Routes>
    </HashRouter>
  );
}

function SetNav() {
  return (
    <nav>
      <ul>
        <li><Link to="#/">Home</Link></li>
        <li><Link to="#/about">About</Link></li>
        <li><Link to="#/products">Products</Link></li>
        <li><Link to="#/form">Form</Link></li>
      </ul>
    </nav>
  );
}

export default MyNav;