/* =======================
   LOGIN PROTECTION
======================= */
if (
  window.location.pathname.includes("index.html") &&
  !localStorage.getItem("loggedInUser")
) {
  window.location.href = "login.html";
}

/* =======================
   PRODUCTS (20 CLOTHES)
======================= */
const products = [
  { 
    name: "Men's Casual T-Shirt", 
    price: 599, 
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Men's Denim Jeans", 
    price: 1299, 
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Men's Hoodie", 
    price: 1799, 
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Men's Formal Shirt", 
    price: 999, 
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Men's Jacket", 
    price: 2499, 
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Women's Summer Dress", 
    price: 1899, 
    img: "https://images.unsplash.com/photo-1519744346363-d2b96f43d8f4?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Women's Casual Top", 
    price: 799, 
    img: "https://images.unsplash.com/photo-1495121605193-b116b5b09a9e?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Women's Denim Jeans", 
    price: 1499, 
    img: "https://images.unsplash.com/photo-1542060743-2de6fd43e11a?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Women's Hoodie", 
    price: 1999, 
    img: "https://images.unsplash.com/photo-1520975698510-14f2d64c1a37?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Women's Formal Shirt", 
    price: 1199, 
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Men's Polo T-Shirt", 
    price: 899, 
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Men's Sweatshirt", 
    price: 1599, 
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Men's Chinos Pants", 
    price: 1399, 
    img: "https://images.unsplash.com/photo-1602810311954-9d7f829d8703?auto=format&fit=crop&w=900&q=80" 
  },

  // ✅ CHANGED
  { 
    name: "Women's Skirt", 
    price: 999, 
    img: "https://images.unsplash.com/photo-1576698481083-5b541b3b4852?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Women's Blouse", 
    price: 899, 
    img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Women's Leggings", 
    price: 699, 
    img: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Men's Winter Coat", 
    price: 3499, 
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Women's Winter Coat", 
    price: 3699, 
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Men's Shorts", 
    price: 699, 
    img: "https://images.unsplash.com/photo-1593032465171-8a6cfd5cfd01?auto=format&fit=crop&w=900&q=80" 
  },

  { 
    name: "Women's Crop Top", 
    price: 649, 
    img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=900&q=80" 
  }
];

/* =======================
   CART DATA
======================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =======================
   SHOP FUNCTIONS
======================= */
function renderProducts(list = products) {
  const productList = document.getElementById("productList");
  if (!productList) return;

  productList.innerHTML = "";
  list.forEach((product, index) => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
  });
}

function filterProducts() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const search = input.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search)
  );
  renderProducts(filtered);
}

function addToCart(index) {
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product added to cart!");
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  cartCount.style.display = cart.length > 0 ? "inline-block" : "none";
  cartCount.textContent = cart.length;
}

function goCart() {
  window.location.href = "cart.html";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

/* =======================
   CART PAGE
======================= */
function loadCart() {
  const cartItems = document.getElementById("cartItems");
  if (!cartItems) return;

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<h3 style='text-align:center'>Cart is empty</h3>";
    return;
  }

  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="product-card">
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

function goShop() {
  window.location.href = "index.html";
}

/* =======================
   INIT
======================= */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCount();
});
