# E-TechHub-e-commerce-website

A fully functional e-commerce website built with pure **React JavaScript** (JSX), demonstrating essential React concepts, ES6+ JavaScript, and responsive web design using Vite and Tailwind CSS.

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

- **Product Listings**: products displayed in responsive grid
- **Shopping Cart**: Add/remove items with real-time quantity management
- **Price Calculation**: Automatic subtotal, tax (GST 18%), and total calculation
- **React Router Navigation**: Seamless routing between Home and Cart pages
- **Responsive Design**: Mobile-first Tailwind CSS (works on mobile, tablet, desktop)
- **localStorage Persistence**: Cart state automatically saved and restored

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

### React Hooks
- `useState` - Component state management
- `useEffect` - Side effects and localStorage sync
- `useContext` - Global cart state
- Custom hook pattern (`useCart`)

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
ecommerce-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar with cart badge
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── CartItem.jsx        # Cart item with controls
│   │   └── Footer.jsx          # Footer component
│   ├── pages/
│   │   ├── HomePage.jsx        # Product listing page
│   │   ├── CartPage.jsx        # Shopping cart page
│   │   └── NotFoundPage.jsx    # 404 error page
│   ├── context/
│   │   └── CartContext.jsx     # Global cart state (Context API)
│   ├── data/
│   │   └── products.js         # Hardcoded product data
│   ├── App.jsx                 # Main app component with routing
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
Main component that sets up React Router and wraps app with CartProvider for global state management. Handles routing between Home, Cart, and 404 pages.

### src/main.jsx
React entry point. Mounts App component to the DOM and wraps with React.StrictMode.

### src/context/CartContext.jsx
Uses React Context API for global cart state. Key functions:
- `addToCart()` - Add product or increment quantity
- `removeFromCart()` - Remove item completely
- `updateQuantity()` - Change item quantity
- `getTotalPrice()` - Calculate cart total with tax
- `getCartCount()` - Get total items in cart
- `clearCart()` - Empty entire cart

Automatically saves/loads cart from localStorage.

### src/components/Header.jsx
Navigation bar with E-TechHub logo, navigation links, and shopping cart icon with item count badge.

### src/components/ProductCard.jsx
Displays individual product with image, category, name, description, price, and "Add to Cart" button.

### src/components/CartItem.jsx
Shows cart item with quantity controls (decrease/increase buttons), remove button, and line item price calculation.

### src/components/Footer.jsx
Footer with copyright and links information.

### src/pages/HomePage.jsx
Main page displaying all 8 products in a responsive grid using ProductCard components.

### src/pages/CartPage.jsx
Shopping cart page showing cart items, quantity controls, order summary with tax calculation, and continue shopping link.

### src/pages/NotFoundPage.jsx
404 error page for invalid routes.

### src/data/products.js
Array of 8 hardcoded tech products with id, name, category, price, description, and image URL.

### src/index.css
Global styles including Tailwind CSS imports and base styles.

## How It Works

1. **Browse Products**: HomePage displays all 8 products in a grid
2. **Add to Cart**: Click "Add to Cart" on any ProductCard
3. **View Cart**: Click cart icon in Header to go to CartPage
4. **Manage Quantities**: Use +/- buttons to adjust quantities
5. **Remove Items**: Click remove button on CartItem
6. **See Totals**: CartPage shows subtotal, tax (GST 18%), and final total
7. **Persistence**: Cart automatically saved to localStorage and restored on refresh

## Data Structures

### Product Object
```javascript
{
  id: 1,
  name: 'Product Name',
  category: 'Electronics',
  price: 99.99,
  description: 'Product description',
  image: 'https://image-url.jpg'
}
```

### Cart Item Object
```javascript
{
  ...product,  // All product properties
  quantity: 2  // Item quantity
}
```

## localStorage Implementation

- **Key**: `'cart'`
- **Format**: JSON stringified array of cart items
- **Auto-save**: Saved on every cart change via useEffect
- **Auto-load**: Loaded on app startup via useState initializer
- **Persistence**: Survives page refresh and browser restart

## Responsive Design

Uses Tailwind CSS breakpoints:
- **Mobile** (default): Single column
- **Tablet** (md:): 2 columns
- **Desktop** (lg:): 3 columns

## Component Props Flow

```
App
├── Header (useCart) → displays cart count
├── Routes
│   ├── HomePage
│   │   └── ProductCard → onAddToCart (calls addToCart)
│   ├── CartPage (useCart)
│   │   └── CartItem → onRemove, onUpdateQuantity
│   └── NotFoundPage
└── Footer
```

## State Management

- **Global State**: CartContext using React Context API
- **Local State**: Component-level useState for UI
- **Persistence**: localStorage for cart recovery

## Technologies

- **React 18.3.1** - UI library with Hooks
- **React Router 6.20** - Client-side routing
- **Vite 5.0.8** - Fast build tool and dev server
- **Tailwind CSS 3.4.1** - Responsive styling
- **Lucide React 0.292.0** - Icons (ShoppingCart)
- **JavaScript ES6+** - Modern JavaScript

## Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
pnpm build
# Drag dist folder to Netlify dashboard
```

### GitHub Pages
```bash
pnpm build
# Push dist folder to gh-pages branch
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Troubleshooting

**Cart not persisting?**
- Check localStorage is enabled in browser
- Dev tools → Application → LocalStorage → check 'cart' key

**Styles not showing?**
- Clear browser cache
- Restart dev server with `pnpm dev`

**Routes not working?**
- Verify BrowserRouter in App.jsx
- Check file paths use `.jsx` extension

## Learning Resources

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [JavaScript ES6+](https://javascript.info)

## Notes

This is a pure React JavaScript project (not Next.js). All files use `.jsx` extension for React components and `.js` for data files. No TypeScript is used—this is vanilla JavaScript with JSX syntax.
