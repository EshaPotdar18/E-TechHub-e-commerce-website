import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, Lock } from 'lucide-react';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [checkoutData, setCheckoutData] = useState(null);

  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [upiData, setUpiData] = useState({
    upiId: ''
  });

  useEffect(() => {
    const savedCheckout = localStorage.getItem('checkoutData');
    if (savedCheckout) {
      setCheckoutData(JSON.parse(savedCheckout));
    }
  }, []);

  if (!checkoutData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Payment</h1>
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            No checkout data found. Please go back to checkout.
          </p>
          <Link
            to="/checkout"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    );
  }

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) return;
    } else if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 4) return;
      if (formattedValue.length === 2 && !value.includes('/')) {
        formattedValue = formattedValue + '/';
      }
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 3) return;
    }

    setCardData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleUpiChange = (e) => {
    setUpiData({ upiId: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (paymentMethod === 'card') {
      if (!cardData.cardNumber || !cardData.cardName || !cardData.expiryDate || !cardData.cvv) {
        alert('Please fill in all card details');
        return;
      }
      if (cardData.cardNumber.replace(/\s/g, '').length !== 16) {
        alert('Please enter a valid 16-digit card number');
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!upiData.upiId) {
        alert('Please enter your UPI ID');
        return;
      }
      if (!upiData.upiId.includes('@')) {
        alert('Please enter a valid UPI ID (e.g., user@bankname)');
        return;
      }
    } else if (paymentMethod === 'netbanking') {
      // Net Banking selected
    }

    // Process Payment
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const newOrderId = 'TH' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setOrderId(newOrderId);
      setOrderPlaced(true);
      clearCart();
      localStorage.removeItem('checkoutData');
      setIsProcessing(false);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <CheckCircle size={80} className="text-green-600 mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Thank you for your order. Your order has been confirmed and will be shipped soon.
          </p>

          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-left">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">Order Number</p>
                <p className="text-2xl font-bold text-blue-600">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{checkoutData.total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>

            <hr className="my-6" />

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Delivery Address</p>
                <p className="text-gray-900 font-semibold">
                  {checkoutData.shipping.firstName} {checkoutData.shipping.lastName}
                </p>
                <p className="text-gray-700">
                  {checkoutData.shipping.address}, {checkoutData.shipping.city}
                </p>
                <p className="text-gray-700">
                  {checkoutData.shipping.state} - {checkoutData.shipping.zipCode}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Shipping Method</p>
                <p className="text-gray-900 font-semibold">
                  {checkoutData.shippingMethod === 'standard' ? 'Standard Shipping (3-5 days)' : 'Express Shipping (1-2 days)'}
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What's Next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>1. A confirmation email has been sent to your registered email address</li>
              <li>2. You will receive a tracking number once your order ships</li>
              <li>3. Your order will be delivered to the address provided</li>
              <li>4. For support, contact us at support@etechhub.com</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Print Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Payment</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="md:col-span-2">
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              {/* Payment Method Selection */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Select Payment Method
                </h2>

                <div className="space-y-3">
                  {/* Credit/Debit Card */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 font-semibold text-gray-900">
                      Credit/Debit Card
                    </span>
                  </label>

                  {/* UPI */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 font-semibold text-gray-900">
                      UPI
                    </span>
                  </label>

                  {/* Net Banking */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                      checked={paymentMethod === 'netbanking'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 font-semibold text-gray-900">
                      Net Banking
                    </span>
                  </label>
                </div>
              </div>

              {/* Card Payment Form */}
              {paymentMethod === 'card' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Card Details
                  </h3>

                  <div className="mb-4">
                    <label htmlFor="cardName" className="block text-gray-900 font-semibold mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={cardData.cardName}
                      onChange={handleCardChange}
                      placeholder="Enter cardholder name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-gray-900 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardData.cardNumber}
                      onChange={handleCardChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-gray-900 font-semibold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={cardData.expiryDate}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-gray-900 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="password"
                        id="cvv"
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        maxLength="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Payment Form */}
              {paymentMethod === 'upi' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    UPI Details
                  </h3>

                  <div>
                    <label htmlFor="upiId" className="block text-gray-900 font-semibold mb-2">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      id="upiId"
                      value={upiData.upiId}
                      onChange={handleUpiChange}
                      placeholder="yourname@bankname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Net Banking */}
              {paymentMethod === 'netbanking' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Select Your Bank
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">Choose your bank from the list after clicking Pay Now</p>
                    <p className="text-sm text-gray-600">You will be redirected to your bank's secure portal</p>
                  </div>
                </div>
              )}

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <Lock size={20} className="text-green-600 mt-1" />
                <div>
                  <p className="font-semibold text-green-900">Secure Payment</p>
                  <p className="text-sm text-green-800">Your payment is protected with industry-standard encryption</p>
                </div>
              </div>

              {/* Pay Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full font-bold py-3 rounded-lg transition-colors duration-200 text-white ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isProcessing ? 'Processing Payment...' : 'Complete Payment'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">
                    ₹{(checkoutData.total * 100 / 118).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (GST 18%):</span>
                  <span className="font-semibold">
                    ₹{(checkoutData.total * 18 / 118).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span className="font-semibold">
                    ₹{(checkoutData.shippingMethod === 'standard' ? 0 : 100).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span className="text-blue-600">
                  ₹{checkoutData.total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
