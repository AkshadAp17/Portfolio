const express = require('express');
const router = express.Router();

// In-memory product storage (would be database in production)
let products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    stock: 50,
    featured: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch",
    price: 249.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    stock: 30,
    featured: true
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    stock: 100,
    featured: false
  },
  {
    id: 4,
    name: "Premium Coffee Beans",
    description: "Freshly roasted premium coffee beans from Colombia",
    price: 19.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    stock: 75,
    featured: true
  },
  {
    id: 5,
    name: "Yoga Mat Pro",
    description: "Non-slip yoga mat for all your workout needs",
    price: 49.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1506629905607-3f0696b95c2b?w=400",
    stock: 40,
    featured: false
  }
];

// Get all products
router.get('/', (req, res) => {
  const { category, featured, search } = req.query;
  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (featured === 'true') {
    filteredProducts = filteredProducts.filter(p => p.featured);
  }

  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(filteredProducts);
});

// Get single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Get categories
router.get('/categories/all', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json(categories);
});

module.exports = router;