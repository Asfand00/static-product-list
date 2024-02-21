import React from 'react';

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Advanced smartphone with cutting-edge features.", price: 800 },
  { id: 3, name: "Tablet", description: "Portable tablet for entertainment and productivity.", price: 500 }
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Products:</h2>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
