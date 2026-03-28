import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function MyNav() {
  return {
    <BrowserRouter>
        <SetNav />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
    };
}

function SetNav() {
    return {
        <nav>
            <ul>
                <l1><Link to="/home">Home</Link></l1>
                <l1><Link to="/about">Home</Link></l1>
            </ul>
        </nav>
    };
}

export default MyNav;