/* ============================================
   API Utility - Frontend API Calls
   ============================================ */

const API_BASE_URL = 'http://localhost:3000/api';

// Make API_BASE_URL available globally
window.API_BASE_URL = API_BASE_URL;

// Helper function to get auth token
function getAuthToken() {
    return localStorage.getItem('authToken');
}

// Helper function to set auth token
function setAuthToken(token) {
    localStorage.setItem('authToken', token);
}

// Helper function to remove auth token
function removeAuthToken() {
    localStorage.removeItem('authToken');
}

// Helper function to get current user
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Helper function to set current user
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Helper function to remove current user
function removeCurrentUser() {
    localStorage.removeItem('currentUser');
}

// API request helper
async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = getAuthToken();
    
    const config = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        }
    };
    
    // Handle body
    if (options.body) {
        if (typeof options.body === 'object' && !(options.body instanceof FormData)) {
            config.body = JSON.stringify(options.body);
        } else {
            config.body = options.body;
        }
    }
    
    // Add other options (but not body, already handled)
    Object.keys(options).forEach(key => {
        if (key !== 'body' && key !== 'method') {
            config[key] = options[key];
        }
    });
    
    try {
        const response = await fetch(url, config);
        
        // Handle network errors
        if (!response) {
            throw new Error('No response from server. Is the backend running?');
        }
        
        // Handle non-JSON responses
        let data;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            try {
                data = await response.json();
            } catch (e) {
                const text = await response.text();
                throw new Error(`Invalid JSON response: ${text.substring(0, 100)}`);
            }
        } else {
            const text = await response.text();
            throw new Error(text || 'Request failed');
        }
        
        if (!response.ok) {
            throw new Error(data.message || `Request failed with status ${response.status}`);
        }
        
        return data;
    } catch (error) {
        console.error('API Error:', error);
        console.error('URL:', url);
        console.error('Config:', config);
        
        // Provide helpful error messages
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            throw new Error('Cannot connect to backend server. Please make sure the backend is running on http://localhost:3000');
        }
        
        // Re-throw with more context
        if (error.message) {
            throw error;
        }
        throw new Error('Network error or server unavailable');
    }
}

// ============================================
// Authentication API
// ============================================

async function login(email, password) {
    try {
        const response = await apiRequest('/auth/login', {
            method: 'POST',
            body: { email, password }
        });
        
        if (response.success && response.data.token) {
            setAuthToken(response.data.token);
            setCurrentUser(response.data.user);
        }
        
        return response;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

async function register(userData) {
    try {
        const response = await apiRequest('/auth/register', {
            method: 'POST',
            body: userData
        });
        
        if (response.success && response.data.token) {
            setAuthToken(response.data.token);
            setCurrentUser(response.data.user);
        }
        
        return response;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

function logout() {
    removeAuthToken();
    removeCurrentUser();
}

async function verifyToken() {
    try {
        const response = await apiRequest('/auth/verify');
        return response.success;
    } catch (error) {
        return false;
    }
}

// ============================================
// Products API
// ============================================

async function getProducts(filters = {}) {
    const queryParams = new URLSearchParams();
    
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
    if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
    
    const queryString = queryParams.toString();
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`;
    
    return await apiRequest(endpoint);
}

async function getProductById(id) {
    return await apiRequest(`/products/${id}`);
}

async function getProductsByCategory(category) {
    return await apiRequest(`/products/category/${category}`);
}

// ============================================
// Cart API
// ============================================

async function getCart() {
    return await apiRequest('/cart');
}

async function addToCart(productId, size, quantity) {
    return await apiRequest('/cart/add', {
        method: 'POST',
        body: JSON.stringify({ productId, size, quantity })
    });
}

async function removeFromCart(itemId) {
    return await apiRequest(`/cart/remove/${itemId}`, {
        method: 'DELETE'
    });
}

async function updateCartItemQuantity(itemId, quantity) {
    return await apiRequest(`/cart/update/${itemId}`, {
        method: 'PUT',
        body: JSON.stringify({ quantity })
    });
}

async function clearCart() {
    return await apiRequest('/cart/clear', {
        method: 'DELETE'
    });
}

// ============================================
// User API
// ============================================

async function getUserProfile() {
    return await apiRequest('/users/profile');
}

async function updateUserProfile(profileData) {
    return await apiRequest('/users/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData)
    });
}

// Export API functions
window.UrbanWearAPI = {
    API_BASE_URL,
    
    // Auth
    login,
    register,
    logout,
    verifyToken,
    getAuthToken,
    getCurrentUser,
    setCurrentUser,
    removeCurrentUser,
    
    // Products
    getProducts,
    getProductById,
    getProductsByCategory,
    
    // Cart
    getCart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    
    // Users
    getUserProfile,
    updateUserProfile
};

