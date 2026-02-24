import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      {/* Product Image */}
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">₹{item.price.toLocaleString('en-IN')} per item</p>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            disabled={item.quantity === 1}
            className="p-1 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Decrease quantity"
          >
            <Minus size={18} />
          </button>

          <input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-12 text-center border border-gray-300 rounded px-2 py-1"
            aria-label="Item quantity"
          />

          <button
            onClick={handleIncrement}
            className="p-1 text-gray-600 hover:text-blue-600"
            aria-label="Increase quantity"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Total Price and Delete Button */}
      <div className="flex flex-col items-end justify-between">
        <p className="text-lg font-bold text-gray-900">
          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
        </p>
        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors"
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
