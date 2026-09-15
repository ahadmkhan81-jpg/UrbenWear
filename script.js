/* ============================================
   UrbanWear - Main JavaScript File
   ============================================ */

// Currency: PKR (Pakistani Rupees)
const CURRENCY_SYMBOL = 'Rs';
const USD_TO_PKR = 278; // Conversion rate

// Helper function to convert USD to PKR
function convertToPKR(usdPrice) {
    return Math.round(usdPrice * USD_TO_PKR);
}

// Product Data - Simulated database (Prices in PKR)
const products = [
    // Men's Products
    { id: 1, name: "Classic White Shirt", price: convertToPKR(49.99), originalPrice: convertToPKR(69.99), category: "men", image: "https://images.unsplash.com/photo-1594938291221-94f313b0e5e0?w=600&h=800&fit=crop", rating: 4.5, description: "Premium cotton shirt with modern fit. Perfect for casual and formal occasions." },
    { id: 2, name: "Slim Fit Jeans", price: convertToPKR(79.99), originalPrice: convertToPKR(99.99), category: "men", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop", rating: 4.8, description: "Comfortable slim-fit jeans with stretch fabric. Durable and stylish." },
    { id: 3, name: "Leather Jacket", price: convertToPKR(199.99), originalPrice: convertToPKR(249.99), category: "men", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop", rating: 4.7, description: "Genuine leather jacket with premium craftsmanship. Timeless style." },
    { id: 4, name: "Casual T-Shirt", price: convertToPKR(29.99), originalPrice: convertToPKR(39.99), category: "men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", rating: 4.3, description: "Soft cotton t-shirt with modern design. Perfect for everyday wear." },
    { id: 5, name: "Formal Blazer", price: convertToPKR(149.99), originalPrice: convertToPKR(199.99), category: "men", image: "https://images.unsplash.com/photo-1594938298606-c6d15599b4d2?w=600&h=800&fit=crop", rating: 4.9, description: "Elegant blazer for business and formal events. Premium quality fabric." },
    { id: 6, name: "Sneakers", price: convertToPKR(89.99), originalPrice: convertToPKR(119.99), category: "men", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop", rating: 4.6, description: "Comfortable sneakers with modern design. Perfect for active lifestyle." },
    
    // Women's Products
    { id: 7, name: "Floral Summer Dress", price: convertToPKR(59.99), originalPrice: convertToPKR(79.99), category: "women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop", rating: 4.7, description: "Beautiful floral dress perfect for summer. Lightweight and comfortable." },
    { id: 8, name: "Elegant Blouse", price: convertToPKR(44.99), originalPrice: convertToPKR(64.99), category: "women", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop", rating: 4.5, description: "Stylish blouse with elegant design. Versatile for any occasion." },
    { id: 9, name: "High-Waist Jeans", price: convertToPKR(69.99), originalPrice: convertToPKR(89.99), category: "women", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop", rating: 4.8, description: "Comfortable high-waist jeans with perfect fit. Flattering design." },
    { id: 10, name: "Designer Handbag", price: convertToPKR(129.99), originalPrice: convertToPKR(179.99), category: "women", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop", rating: 4.9, description: "Luxury handbag with premium materials. Spacious and elegant." },
    { id: 11, name: "Knit Sweater", price: convertToPKR(54.99), originalPrice: convertToPKR(74.99), category: "women", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop", rating: 4.4, description: "Cozy knit sweater for cold weather. Soft and warm." },
    { id: 12, name: "Ankle Boots", price: convertToPKR(99.99), originalPrice: convertToPKR(139.99), category: "women", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop", rating: 4.6, description: "Stylish ankle boots with comfortable heel. Perfect for any season." },
    
    // Kids' Products
    { id: 13, name: "Kids T-Shirt Set", price: convertToPKR(24.99), originalPrice: convertToPKR(34.99), category: "kids", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=800&fit=crop", rating: 4.5, description: "Comfortable t-shirt set for kids. Soft fabric and fun designs." },
    { id: 14, name: "Children's Jeans", price: convertToPKR(34.99), originalPrice: convertToPKR(49.99), category: "kids", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop", rating: 4.3, description: "Durable jeans for active kids. Stretch fabric for comfort." },
    { id: 15, name: "Kids Hoodie", price: convertToPKR(39.99), originalPrice: convertToPKR(54.99), category: "kids", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop", rating: 4.6, description: "Warm and cozy hoodie for kids. Perfect for playtime." },
    { id: 16, name: "Children's Sneakers", price: convertToPKR(44.99), originalPrice: convertToPKR(64.99), category: "kids", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=800&fit=crop", rating: 4.7, description: "Comfortable sneakers for active kids. Durable and stylish." }
];

// Reviews Data
const reviews = [
    { author: "Sarah Johnson", rating: 5, date: "2024-01-15", text: "Absolutely love this product! The quality is exceptional and it fits perfectly." },
    { author: "Michael Chen", rating: 4, date: "2024-01-10", text: "Great value for money. Fast shipping and excellent customer service." },
    { author: "Emily Davis", rating: 5, date: "2024-01-05", text: "Highly recommend! The material is premium and the design is modern." },
    { author: "David Wilson", rating: 4, date: "2023-12-28", text: "Good quality product. Would definitely purchase again." }
];

// Cart Management - Will use API if available
let cart = [];
let useAPI = false; // Flag to check if API is available

// User Authentication - Will use API if available
let currentUser = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', async function() {
    // Check if API is available
    useAPI = typeof UrbanWearAPI !== 'undefined';
    
    // If API available, check authentication
    if (useAPI) {
        const token = UrbanWearAPI.getAuthToken();
        if (token) {
            const isValid = await UrbanWearAPI.verifyToken();
            if (isValid) {
                currentUser = UrbanWearAPI.getCurrentUser();
            } else {
                UrbanWearAPI.logout();
            }
        }
    } else {
        // Fallback to localStorage
        currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    
    initializeDarkMode();
    initializeMobileMenu();
    initializeCart();
    initializeAnimations();
    initializeFilters();
    await loadProducts();
    initializeProductPage();
    initializeQuantityControls();
    initializeSmoothScrolling();
    initializeAuth();
    updateUserUI();
});

// ============================================
// Dark Mode Toggle
// ============================================
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateDarkModeIcon(true);
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeIcon(newTheme === 'dark');
}

function updateDarkModeIcon(isDark) {
    const toggleIcon = document.querySelector('.toggle-icon');
    if (toggleIcon) {
        toggleIcon.textContent = isDark ? '☀️' : '🌙';
    }
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// ============================================
// Cart Functionality
// ============================================
async function initializeCart() {
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    updateCartCount();
    await renderCart();
}

function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

async function addToCart(productId, size = 'L', quantity = 1) {
    // Try API first if available and user is logged in
    if (useAPI && typeof UrbanWearAPI !== 'undefined' && currentUser) {
        try {
            const response = await UrbanWearAPI.addToCart(productId, size, quantity);
            if (response.success) {
                cart = response.data.items;
                updateCartCount();
                renderCart();
                showNotification('Item added to cart!');
                return;
            }
        } catch (error) {
            console.error('Error adding to cart via API:', error);
            showNotification('Please login to add items to cart');
            return;
        }
    }
    
    // Fallback to local storage (for non-logged in users or API unavailable)
    const productList = products; // Use local products as fallback
    const product = productList.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        quantity: quantity
    };
    
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push(cartItem);
    }
    
    saveCart();
    updateCartCount();
    renderCart();
    
    // Show notification
    showNotification('Item added to cart!');
}

async function removeFromCart(itemId, productId = null, size = null) {
    // Try API first if available and user is logged in
    if (useAPI && typeof UrbanWearAPI !== 'undefined' && currentUser && itemId) {
        try {
            const response = await UrbanWearAPI.removeFromCart(itemId);
            if (response.success) {
                cart = response.data.items;
                updateCartCount();
                renderCart();
                return;
            }
        } catch (error) {
            console.error('Error removing from cart via API:', error);
        }
    }
    
    // Fallback to local storage
    if (productId && size) {
        cart = cart.filter(item => !(item.id === productId && item.size === size));
    } else if (itemId) {
        cart = cart.filter(item => item.id !== parseInt(itemId));
    }
    saveCart();
    updateCartCount();
    renderCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        if (cartTotal) cartTotal.textContent = `${CURRENCY_SYMBOL} 0`;
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-info">Size: ${item.size} | Qty: ${item.quantity}</div>
                    <div class="cart-item-price">${CURRENCY_SYMBOL} ${itemTotal.toLocaleString()}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id || item.productId})">&times;</button>
            </div>
        `;
    }).join('');
    
    if (cartTotal) {
        cartTotal.textContent = `${CURRENCY_SYMBOL} ${total.toLocaleString()}`;
    }
}

function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your purchase! This is a demo site, so no actual transaction will occur.');
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    closeCartSidebar();
}

// ============================================
// Product Loading
// ============================================
async function loadProducts() {
    const featuredProducts = document.getElementById('featuredProducts');
    const productsGrid = document.getElementById('productsGrid');
    
    let productList = [];
    
    // Try to load from API first
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category');
            
            const filters = {};
            if (category && category !== 'all') {
                filters.category = category;
            }
            
            const response = await UrbanWearAPI.getProducts(filters);
            if (response.success) {
                productList = response.data;
            } else {
                // Fallback to local products
                productList = products;
            }
        } catch (error) {
            console.error('Error loading products from API:', error);
            productList = products; // Fallback to local
        }
    } else {
        // Use local products
        productList = products;
    }
    
    // Load featured products on homepage
    if (featuredProducts) {
        const featured = productList.slice(0, 6);
        featuredProducts.innerHTML = featured.map(product => createProductCard(product)).join('');
        attachAddToCartListeners(featuredProducts);
    }
    
    // Load all products on shop page
    if (productsGrid) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        let filteredProducts = productList;
        
        if (category && category !== 'all') {
            filteredProducts = productList.filter(p => p.category === category);
        }
        
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        attachAddToCartListeners(productsGrid);
        updateProductsCount(filteredProducts.length);
    }
}

function createProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    return `
        <div class="product-card" data-aos="fade-up">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${CURRENCY_SYMBOL} ${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span>(${product.rating})</span>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

function attachAddToCartListeners(container) {
    const addToCartButtons = container.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
    
    // Make product cards clickable
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(this.querySelector('.add-to-cart-btn').getAttribute('data-product-id'));
                window.location.href = `product.html?id=${productId}`;
            }
        });
    });
}

// ============================================
// Filters
// ============================================
function initializeFilters() {
    const filterInputs = document.querySelectorAll('input[name="category"], input[name="price"]');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const filterToggle = document.getElementById('filterToggle');
    const filtersSidebar = document.querySelector('.filters-sidebar');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
    
    if (filterToggle && filtersSidebar) {
        filterToggle.addEventListener('click', function() {
            filtersSidebar.classList.toggle('active');
        });
    }
    
    // Check URL params for initial filter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        const categoryInput = document.querySelector(`input[name="category"][value="${category}"]`);
        if (categoryInput) {
            categoryInput.checked = true;
            applyFilters();
        }
    }
}

async function applyFilters() {
    const categoryFilter = document.querySelector('input[name="category"]:checked')?.value || 'all';
    const priceFilter = document.querySelector('input[name="price"]:checked')?.value || 'all';
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    let filteredProducts = [];
    
    // Try to load from API first
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        try {
            const filters = {};
            if (categoryFilter !== 'all') {
                filters.category = categoryFilter;
            }
            
            if (priceFilter !== 'all') {
                if (priceFilter.endsWith('+')) {
                    filters.minPrice = parseFloat(priceFilter.replace('+', ''));
                } else {
                    const [min, max] = priceFilter.split('-').map(v => parseFloat(v));
                    filters.minPrice = min;
                    filters.maxPrice = max;
                }
            }
            
            const response = await UrbanWearAPI.getProducts(filters);
            if (response.success) {
                filteredProducts = response.data;
            } else {
                filteredProducts = products;
            }
        } catch (error) {
            console.error('Error loading filtered products:', error);
            filteredProducts = products;
        }
    } else {
        filteredProducts = products;
        
        // Apply category filter
        if (categoryFilter !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
        }
        
        // Apply price filter (in PKR)
        if (priceFilter !== 'all') {
            if (priceFilter.endsWith('+')) {
                const minPrice = parseFloat(priceFilter.replace('+', ''));
                filteredProducts = filteredProducts.filter(p => p.price >= minPrice);
            } else {
                const [min, max] = priceFilter.split('-').map(v => parseFloat(v));
                filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
            }
        }
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    attachAddToCartListeners(productsGrid);
    updateProductsCount(filteredProducts.length);
    
    // Re-initialize animations
    initializeAnimations();
}

function clearFilters() {
    document.querySelectorAll('input[name="category"], input[name="price"]').forEach(input => {
        if (input.value === 'all') {
            input.checked = true;
        }
    });
    applyFilters();
}

function updateProductsCount(count) {
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = `Showing ${count} product${count !== 1 ? 's' : ''}`;
    }
}

// ============================================
// Product Detail Page
// ============================================
async function initializeProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) return;
    
    let product = null;
    
    // Try to load from API first
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        try {
            const response = await UrbanWearAPI.getProductById(productId);
            if (response.success) {
                product = response.data;
            }
        } catch (error) {
            console.error('Error loading product from API:', error);
        }
    }
    
    // Fallback to local products
    if (!product) {
        product = products.find(p => p.id === productId);
    }
    
    if (!product) {
        window.location.href = 'shop.html';
        return;
    }
    
    await loadProductDetails(product);
    loadRelatedProducts(product);
    loadReviews();
}

async function loadProductDetails(product) {
    const mainImage = document.getElementById('mainProductImage');
    const productTitle = document.getElementById('productTitle');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');
    const productCategory = document.getElementById('productCategory');
    const productRating = document.getElementById('productRating');
    const thumbnailImages = document.getElementById('thumbnailImages');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    
    if (productTitle) productTitle.textContent = product.name;
    if (productCategory) productCategory.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    if (productPrice) {
        productPrice.innerHTML = `
            <span class="current-price">${CURRENCY_SYMBOL} ${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="original-price">${CURRENCY_SYMBOL} ${product.originalPrice.toLocaleString()}</span>` : ''}
        `;
    }
    
    if (productDescription) productDescription.textContent = product.description;
    
    if (productRating) {
        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
        productRating.innerHTML = `
            <span class="stars">${stars}</span>
            <span class="rating-text">(${product.rating})</span>
        `;
    }
    
    if (thumbnailImages) {
        // Create thumbnails (using same image for demo)
        thumbnailImages.innerHTML = Array(4).fill(0).map((_, i) => `
            <img src="${product.image}" alt="Thumbnail ${i + 1}" 
                 onclick="changeMainImage('${product.image}')" 
                 ${i === 0 ? 'class="active"' : ''}>
        `).join('');
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('.size-btn.active')?.getAttribute('data-size') || 'L';
            const quantity = parseInt(document.getElementById('quantity')?.value || 1);
            addToCart(product.id, selectedSize, quantity);
        });
    }
}

function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail-images img').forEach(img => {
        img.classList.remove('active');
        if (img.src === imageSrc || img.getAttribute('onclick').includes(imageSrc)) {
            img.classList.add('active');
        }
    });
}

async function loadRelatedProducts(currentProduct) {
    const relatedProducts = document.getElementById('relatedProducts');
    if (!relatedProducts) return;
    
    let productList = [];
    
    // Try to load from API
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        try {
            const response = await UrbanWearAPI.getProductsByCategory(currentProduct.category);
            if (response.success) {
                productList = response.data;
            }
        } catch (error) {
            console.error('Error loading related products:', error);
            productList = products;
        }
    } else {
        productList = products;
    }
    
    const related = productList
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    relatedProducts.innerHTML = related.map(product => createProductCard(product)).join('');
    attachAddToCartListeners(relatedProducts);
}

async function loadReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) return;
    
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        // Fallback to static reviews
        reviewsContainer.innerHTML = reviews.map(review => `
            <div class="review-card" data-aos="fade-up">
                <div class="review-header">
                    <div class="review-author">${review.author}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <div class="review-text">${review.text}</div>
            </div>
        `).join('');
        return;
    }
    
    // Try to load from API
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        try {
            const response = await fetch(`${UrbanWearAPI.API_BASE_URL || 'http://localhost:3000/api'}/reviews/product/${productId}`);
            const data = await response.json();
            
            if (data.success && data.data.length > 0) {
                reviewsContainer.innerHTML = data.data.map(review => {
                    const date = new Date(review.createdAt).toLocaleDateString();
                    return `
                        <div class="review-card" data-aos="fade-up">
                            <div class="review-header">
                                <div class="review-author">${review.firstName} ${review.lastName}</div>
                                <div class="review-date">${date}</div>
                            </div>
                            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                            <div class="review-text">${review.comment || 'No comment provided'}</div>
                        </div>
                    `;
                }).join('');
                return;
            }
        } catch (error) {
            console.error('Error loading reviews:', error);
        }
    }
    
    // Fallback to static reviews
    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="review-card" data-aos="fade-up">
            <div class="review-header">
                <div class="review-author">${review.author}</div>
                <div class="review-date">${review.date}</div>
            </div>
            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');
}

// ============================================
// Size Selector
// ============================================
function initializeSizeSelector() {
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ============================================
// Quantity Controls
// ============================================
function initializeQuantityControls() {
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');
    
    if (decreaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    if (increaseBtn && quantityInput) {
        increaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });
    }
    
    // Initialize size selector if on product page
    if (document.querySelector('.size-btn')) {
        initializeSizeSelector();
    }
}

// ============================================
// Scroll Animations
// ============================================
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Smooth Scrolling
// ============================================
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Notifications
// ============================================
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Authentication Functions
// ============================================
function initializeAuth() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Try API first if available
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        try {
            const response = await UrbanWearAPI.login(email, password);
            if (response.success) {
                currentUser = response.data.user;
                showNotification('Login successful! Welcome back!');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
                return;
            }
        } catch (error) {
            showNotification(error.message || 'Invalid email or password. Please try again.');
            return;
        }
    }
    
    // Fallback to localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showNotification('Login successful! Welcome back!');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        showNotification('Invalid email or password. Please try again.');
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters!');
        return;
    }
    
    // Try API first if available
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        try {
            // Show loading state
            const submitBtn = document.querySelector('#signupForm button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';
            
            const response = await UrbanWearAPI.register({
                firstName,
                lastName,
                email,
                phone,
                password,
                confirmPassword
            });
            
            if (response.success) {
                currentUser = response.data.user;
                showNotification('Account created successfully! Welcome to UrbanWear!');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
                return;
            } else {
                showNotification(response.message || 'Error creating account. Please try again.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                return;
            }
        } catch (error) {
            console.error('Signup error:', error);
            let errorMessage = 'Error creating account. Please try again.';
            
            if (error.message) {
                if (error.message.includes('Cannot connect to backend')) {
                    errorMessage = 'Backend server is not running. Please start it with: cd backend && npm run dev';
                } else if (error.message.includes('already exists')) {
                    errorMessage = 'This email is already registered. Please login instead.';
                } else {
                    errorMessage = error.message;
                }
            }
            
            showNotification(errorMessage);
            
            // Re-enable button
            const submitBtn = document.querySelector('#signupForm button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Create Account';
            }
            return;
        }
    }
    
    // Fallback to localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        showNotification('Email already registered! Please login instead.');
        return;
    }
    
    const newUser = {
        firstName,
        lastName,
        email,
        phone,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = {
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showNotification('Account created successfully! Welcome to UrbanWear!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function updateUserUI() {
    // Update navbar to show user info if logged in
    const navMenu = document.getElementById('navMenu');
    if (navMenu && currentUser) {
        // Find login link and replace with user menu
        const loginLink = Array.from(navMenu.querySelectorAll('a')).find(a => a.href.includes('login.html'));
        if (loginLink) {
            const userItem = document.createElement('li');
            userItem.innerHTML = `<a href="#" id="userMenu">${currentUser.firstName} ${currentUser.lastName}</a>`;
            loginLink.parentElement.replaceWith(userItem);
            
            // Add logout functionality
            document.getElementById('userMenu').addEventListener('click', function(e) {
                e.preventDefault();
                handleLogout();
            });
        }
    }
}

function handleLogout() {
    if (useAPI && typeof UrbanWearAPI !== 'undefined') {
        UrbanWearAPI.logout();
    } else {
        localStorage.removeItem('currentUser');
    }
    currentUser = null;
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    showNotification('Logged out successfully!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

