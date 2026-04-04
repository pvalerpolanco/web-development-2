function Products() {
  return (
    <div className="Products">
      <h1>Products</h1>
      <ul className="product-list">
        <li className="product-item">
          <span className="product-name">Apple</span>
          <span className="product-type">Fruit</span>
          <span className="product-cost">$2.50</span>
        </li>
        <li className="product-item">
          <span className="product-name">Pineapple</span>
          <span className="product-type">Fruit</span>
          <span className="product-cost">$3.25</span>
        </li>
        <li className="product-item">
          <span className="product-name">Cucumber</span>
          <span className="product-type">Vegetable</span>
          <span className="product-cost">$0.50</span>
        </li>
      </ul>
    </div>
  );
}

export default Products;