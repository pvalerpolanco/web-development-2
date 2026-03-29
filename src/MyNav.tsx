import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function MyNav() {
  return (
    /* The basename tells React Router that the app lives at /web-development-2/ */
    <BrowserRouter basename="/web-development-2">
      <SetNav />
      <Routes>
        {/* Set the default path to Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function SetNav() {
  return (
    <nav>
      <ul>
        {/* Changed <l1> to <li> and fixed the About link text */}
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MyNav;