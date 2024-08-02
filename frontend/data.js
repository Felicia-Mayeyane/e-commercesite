document.addEventListener('DOMContentLoaded', async () => {
  const productsContainer = document.getElementById('products');
  const cartContainer = document.getElementById('cart');

  // Fetch and display products
  async function fetchProducts() {
      try {
          const response = await fetch('/api/products');
          const products = await response.json();
          productsContainer.innerHTML = products.map(p => `
              <div>
                  <h2>${p.name}</h2>
                  <p>${p.description}</p>
                  <p>Price: $${p.price}</p>
                  <button onclick="addToCart('${p._id}', 1)">Add to Cart</button>
              </div>
          `).join('');
      } catch (error) {
          console.error('Error fetching products:', error);
      }
  }

  // Fetch and display cart
  async function fetchCart() {
      try {
          const response = await fetch('/api/cart');
          if (response.ok) {
              const cart = await response.json();
              cartContainer.innerHTML = cart.map(item => `
                  <div>
                      <p>Product ID: ${item.productId}</p>
                      <p>Quantity: ${item.quantity}</p>
                      <button onclick="removeFromCart('${item.productId}')">Remove</button>
                  </div>
              `).join('');
          } else {
              console.error('Error fetching cart:', await response.json());
          }
      } catch (error) {
          console.error('Error fetching cart:', error);
      }
  }

  window.addToCart = async (productId, quantity) => {
      try {
          const response = await fetch('/api/cart', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ productId, quantity })
          });

          if (response.ok) {
              await fetchCart();
          } else {
              console.error('Error adding to cart:', await response.json());
          }
      } catch (error) {
          console.error('Error adding to cart:', error);
      }
  };

  window.removeFromCart = async (productId) => {
      try {
          const response = await fetch('/api/cart', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ productId })
          });

          if (response.ok) {
              await fetchCart();
          } else {
              console.error('Error removing from cart:', await response.json());
          }
      } catch (error) {
          console.error('Error removing from cart:', error);
      }
  };

  if (productsContainer) {
      fetchProducts();
  }

  if (cartContainer) {
      fetchCart();
  }
});
