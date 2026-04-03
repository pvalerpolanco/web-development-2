import Home from './Home'
import About from './About'
import Products from './Products'
import MyForm from './MyForm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function MyNav() {
  return (
    <BrowserRouter basename="/web-development-2">
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/form" element={<MyForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default MyNav