# E-TechHub-e-commerce-website

A fully functional e-commerce website built with pure **React JavaScript** (JSX), demonstrating essential React concepts, ES6+ JavaScript, and responsive web design using Vite and Tailwind CSS. Complete with product browsing, cart management, checkout process, and payment flow.

### Live Demo

🔗 Live Website:
https://e-techhub-ecommerce-website.vercel.app/

📂 GitHub Repository:
https://github.com/EshaPotdar18/E-TechHub-e-commerce-website

## 🛠️ Tech Stack

- React.js
- React Router DOM
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- HTML5 & CSS3

## Core Features

- **Product Listings**: tech products in Indian Rupees (₹) displayed in responsive grid
- **Shopping Cart**: Add/remove items with real-time quantity management
- **Price Calculation**: Automatic subtotal, tax (18%), and total calculation in rupees
- **React Router Navigation**: routes for seamless navigation (Home, About, Contact, Cart, Checkout, Payment, 404)
- **Enhanced Homepage**: Hero section with features, testimonials, newsletter signup, smooth scroll to products
- **About Page**: Company story, statistics, core values, and mission statement
- **Contact Page**: Contact form with validation, contact information, and FAQ section
- **Checkout Page**: Shipping form with address details and shipping method selection
- **Payment Page**: Multiple payment methods (Card, UPI, Net Banking) with order confirmation
- **Responsive Design**: Mobile-first Tailwind CSS (works on mobile, tablet, desktop)
- **localStorage Persistence**: Cart state automatically saved and restored across sessions

## Learning Topics Covered

### JavaScript ES6+ Features
- Arrow functions
- Destructuring (objects and arrays)
- Spread operator
- Template literals
- Const/let scoping

### React Fundamentals
- Functional components (JSX)
- Props and prop passing
- State management with `useState`
- Event handling (click, form inputs)
- Conditional rendering
- Component composition

### React Hooks Used
- `useState` - Component state management (forms, UI state, filter state)
- `useEffect` - Side effects and localStorage sync for cart persistence
- `useContext` - Global cart state management
- `useRef` - Smooth scroll to products section on HomePage
- Custom hook pattern (`useCart`) - Encapsulates cart context usage

### React Router v6
- Router setup with BrowserRouter
- Route definitions
- Link navigation
- 404 page handling

### Styling
- Tailwind CSS utility classes
- Mobile-first responsive design
- Flexbox layouts
- Hover effects and transitions

## Project Structure

```
E-TechHub/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar with links to About, Contact, Cart
│   │   ├── ProductCard.jsx     # Individual product card with rupee pricing
│   │   ├── CartItem.jsx        # Cart item with quantity controls
│   │   └── Footer.jsx          # Footer component
│   ├── pages/
│   │   ├── HomePage.jsx        # Hero, features, testimonials, products grid
│   │   ├── AboutPage.jsx       # Company story, statistics, values
│   │   ├── ContactPage.jsx     # Contact form, info, FAQ section
│   │   ├── CartPage.jsx        # Shopping cart with checkout link
│   │   ├── CheckoutPage.jsx    # Shipping form and order summary
│   │   ├── PaymentPage.jsx     # Payment methods and confirmation
│   │   └── NotFoundPage.jsx    # 404 error page
│   ├── context/
│   │   └── CartContext.jsx     # Global cart state with localStorage
│   ├── data/
│   │   └── products.js         # products in rupees
│   ├── App.jsx                 # Main app with routes
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
└── package.json                # Dependencies
```

## Installation & Setup

### Requirements
- Node.js v18+
- pnpm or npm

### Quick Start

```bash
# 1. Install dependencies
npm install
npm install react-router-dom

# 2. Start development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000

```

## File Descriptions

### src/App.jsx
Main component setting up BrowserRouter with 7 routes (Home, About, Contact, Cart, Checkout, Payment, 404). Wraps app with CartProvider for global state management.

### src/main.jsx
React entry point. Mounts App component to the DOM and wraps with React.StrictMode.

### src/context/CartContext.jsx
Uses React Context API for global cart state with localStorage persistence. Key methods:
- `addToCart(product)` - Add product or increment quantity
- `removeFromCart(id)` - Remove item completely
- `updateQuantity(id, qty)` - Change item quantity
- `getTotalPrice()` - Calculate cart total with 8% tax
- `getCartCount()` - Get total items in cart
- `clearCart()` - Empty entire cart

### src/components/Header.jsx
Navigation bar with TechHub logo, links to Home/About/Contact, and shopping cart icon with item count badge.

### src/components/ProductCard.jsx
Displays individual product card with image, category, name, description, price in rupees (₹), and "Add to Cart" button with hover effects.

### src/components/CartItem.jsx
Shows cart item with product image, details, quantity controls (+/- buttons), remove button, and line item total in rupees.

### src/components/Footer.jsx
Footer with copyright, social media links, and company information.

### src/pages/HomePage.jsx
Enhanced landing page with:
- Gradient hero section with "Shop Now" button
- Three feature cards (Free Shipping, Secure, 24/7 Support)
- Three customer testimonials with ratings
- Newsletter signup form
- Product listing with category filter
- Smooth scroll to products using useRef

### src/pages/AboutPage.jsx
Company information page including company story, key statistics (10K+ customers, 4.9★ rating), core values with icons, and call-to-action button.

### src/pages/ContactPage.jsx
Contact page with contact information cards, contact form (name, email, message validation), and FAQ section with 4 common questions.

### src/pages/CartPage.jsx
Shopping cart displaying cart items using CartItem components, quantity management, order summary with subtotal/tax/total in rupees, and "Proceed to Checkout" link.

### src/pages/CheckoutPage.jsx
Checkout form capturing:
- Shipping details (name, email, address, city, postal code, country)
- Shipping method selection (Standard Free / Express ₹100)
- Order summary sidebar showing products and total
- Data persisted to localStorage
- Next/Previous buttons for navigation

### src/pages/PaymentPage.jsx
Payment processing page with:
- Three payment methods (Credit/Debit Card, UPI, Net Banking)
- Card validation (16-digit number, CVV, expiry)
- UPI ID validation
- Bank selection for Net Banking
- Order confirmation with order ID, delivery address, estimated delivery
- localStorage integration for cart persistence

### src/pages/NotFoundPage.jsx
404 error page with message and link back to home.

### src/data/products.js
Array of 8 hardcoded tech products with id, name, category, price in rupees (₹), description, and image URL from Unsplash.

### src/index.css
Global styles including Tailwind CSS imports, base styling, and responsive design variables.

## Complete User Journey

1. **Landing Page**: User arrives at enhanced HomePage with hero section and features
2. **Browse Products**: Scroll to products section or click "Shop Now" button to view products in grid
3. **Filter Products**: Select category (Audio, Wearables, Electronics, Accessories) to filter products
4. **Add to Cart**: Click "Add to Cart" button to add items to shopping cart
5. **Cart Management**: Click cart icon to view CartPage and manage quantities
6. **Review Cart**: See all items, quantities, and price breakdown in rupees (₹)
7. **Proceed to Checkout**: Click "Proceed to Checkout" button to go to CheckoutPage
8. **Shipping Information**: Fill shipping form with address and select shipping method
9. **Review Order**: See order summary with all products and total cost
10. **Payment**: Choose payment method (Card, UPI, Net Banking) and enter payment details
11. **Order Confirmation**: Receive order confirmation with order ID and estimated delivery
12. **Persistence**: Cart saved to localStorage and restored on refresh

**Additional Navigation**:
- Click "About" in header to read company story and values
- Click "Contact" in header to contact us or view FAQ
- All pages are responsive and work on mobile, tablet, and desktop

## localStorage Implementation

- **Key**: `'cart'`
- **Format**: JSON stringified array of cart items
- **Auto-save**: Saved on every cart change via useEffect
- **Auto-load**: Loaded on app startup via useState initializer
- **Persistence**: Survives page refresh and browser restart
- **Data**: Stores product details, quantity, and price

## Technologies

- **React 18.3.1** - UI library with Hooks
- **React Router 6.20** - Client-side routing
- **Vite 5.0.8** - Fast build tool and dev server
- **Tailwind CSS 3.4.1** - Responsive styling
- **Lucide React 0.292.0** - Icons (ShoppingCart)
- **JavaScript ES6+** - Modern JavaScript

## Key Features Implemented

### Dynamic Elements
- **Smooth Scrolling**: Click "Shop Now" on hero to smoothly scroll to products section
- **Category Filtering**: Filter 8 products by Audio, Wearables, Electronics, Accessories
- **Newsletter Signup**: Email subscription form with validation
- **Form Validation**: Contact form and payment forms with proper validation

### Enhanced User Experience
- **Hero Section**: Gradient background with compelling copy and CTA button
- **Feature Cards**: Three benefit cards with icons (Free Shipping, Security, Support)
- **Testimonials**: 5-star customer reviews with names
- **FAQ Section**: 4 common questions with answers on Contact page
- **Order Tracking**: Order ID generation and delivery information on Payment page

## Learning Outcomes

After building this project, I understand:
- Complete e-commerce workflow from browsing to payment
- Multi-page routing with React Router v6
- Form handling and validation in React
- Context API for state management across multiple pages
- localStorage for data persistence
- Component composition and reusability
- Responsive design with Tailwind CSS
- Smooth scrolling with useRef hook
- Payment integration patterns (UI only, not actual payment processing)
- How to structure and organize a medium-sized React application

## Learning Resources

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [JavaScript ES6+](https://javascript.info)

Thank You.
