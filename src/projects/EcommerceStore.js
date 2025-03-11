import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Product 1', price: 10.0 },
  { id: 2, name: 'Product 2', price: 20.0 },
];

const EcommerceStore = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  const handleCheckout = () => {
    alert(`Proceeding to checkout with ${cart.length} item(s).`);
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">E-commerce Store Prototype</h2>
      <ul>
        {productsData.map((product) => (
          <li key={product.id} className="mb-2">
            {product.name} - ${product.price.toFixed(2)}
            <button
              onClick={() => addToCart(product)}
              className="ml-4 px-3 py-1 bg-green-500 text-white rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-xl">Cart: {cart.length} item(s)</h3>
        {cart.length > 0 && (
          <button onClick={handleCheckout} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default EcommerceStore;
