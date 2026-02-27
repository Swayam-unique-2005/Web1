import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Loader2 } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    clearCart();
    setIsProcessing(false);
    alert("Order placed successfully! (This is a demo)");
    navigate('/');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Contact information</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal code</label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    autoComplete="postal-code"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Payment</h2>
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                 <div className="sm:col-span-2">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                    />
                  </div>
                </div>
                 <div>
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="expiration-date"
                      name="expiration-date"
                      autoComplete="cc-exp"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      autoComplete="csc"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  `Pay $${cartTotal.toFixed(2)}`
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="mt-10 lg:mt-0">
          <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="flex px-4 py-6 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      src={`https://picsum.photos/seed/${item.slug}/100/100`}
                      alt={item.name}
                      className="w-20 rounded-md"
                    />
                  </div>
                  <div className="ml-6 flex flex-1 flex-col">
                    <div className="flex">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm">
                          <span className="font-medium text-gray-700">{item.name}</span>
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 capitalize">{item.type}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between pt-2">
                      <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">Qty {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex items-center justify-between">
                <dt className="text-sm">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm">Shipping</dt>
                <dd className="text-sm font-medium text-gray-900">Free</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base font-medium">Total</dt>
                <dd className="text-base font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
