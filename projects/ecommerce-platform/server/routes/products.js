const express = require('express');
const router = express.Router();

// In-memory product storage (would be database in production)
let products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    stock: 50,
    featured: true,
    brand: "AudioTech",
    features: ["Active Noise Cancellation", "30hr Battery", "Quick Charge", "Premium Sound"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    price: 249.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    stock: 30,
    featured: true,
    brand: "FitTech",
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "Sleep Tracking"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt made from 100% certified organic cotton. Perfect for everyday wear.",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    stock: 100,
    featured: false,
    brand: "EcoWear",
    features: ["100% Organic Cotton", "Sustainable", "Comfortable Fit", "Machine Washable"]
  },
  {
    id: 4,
    name: "Premium Coffee Beans",
    description: "Freshly roasted premium coffee beans from Colombia. Single-origin, medium roast with notes of chocolate and caramel.",
    price: 19.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    stock: 75,
    featured: true,
    brand: "BrewMaster",
    features: ["Single Origin", "Medium Roast", "Fair Trade", "Fresh Roasted"]
  },
  {
    id: 5,
    name: "Yoga Mat Pro",
    description: "Professional-grade non-slip yoga mat with superior grip and cushioning. Perfect for all yoga styles and intensities.",
    price: 49.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1506629905607-3f0696b95c2b?w=400",
    stock: 40,
    featured: false,
    brand: "YogaPro",
    features: ["Non-Slip Surface", "Extra Cushioning", "Eco-Friendly", "Easy Clean"]
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    description: "High-precision wireless gaming mouse with RGB lighting and customizable buttons for professional gaming.",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    stock: 60,
    featured: false,
    brand: "GameTech",
    features: ["High DPI", "RGB Lighting", "Wireless", "Customizable Buttons"]
  },
  {
    id: 7,
    name: "Denim Jacket",
    description: "Classic denim jacket made from premium denim fabric. Timeless style that never goes out of fashion.",
    price: 89.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882be1?w=400",
    stock: 45,
    featured: true,
    brand: "DenimCo",
    features: ["Premium Denim", "Classic Fit", "Multiple Pockets", "Durable"]
  },
  {
    id: 8,
    name: "Protein Powder",
    description: "High-quality whey protein powder with 25g protein per serving. Perfect for post-workout recovery.",
    price: 39.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400",
    stock: 80,
    featured: false,
    brand: "NutriPro",
    features: ["25g Protein", "Low Sugar", "Easy Mixing", "Great Taste"]
  },
  {
    id: 9,
    name: "Running Shoes",
    description: "Lightweight running shoes with advanced cushioning technology for maximum comfort during your runs.",
    price: 119.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    stock: 35,
    featured: true,
    brand: "RunFast",
    features: ["Lightweight", "Cushioned Sole", "Breathable", "Durable"]
  },
  {
    id: 10,
    name: "Smartphone Case",
    description: "Protective smartphone case with shock absorption and wireless charging compatibility.",
    price: 24.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400",
    stock: 120,
    featured: false,
    brand: "ProtectTech",
    features: ["Shock Absorption", "Wireless Charging", "Slim Design", "Easy Access"]
  }
];

// Get all products
router.get('/', (req, res) => {
  const { category, featured, search, minPrice, maxPrice, sortBy } = req.query;
  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Filter by featured
  if (featured === 'true') {
    filteredProducts = filteredProducts.filter(p => p.featured);
  }

  // Filter by search
  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filter by price range
  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
  }

  // Sort products
  if (sortBy) {
    switch (sortBy) {
      case 'price_low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name':
      default:
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
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
router.get('/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))].map((name, index) => ({
    id: index + 1,
    name
  }));
  res.json(categories);
});

module.exports = router;