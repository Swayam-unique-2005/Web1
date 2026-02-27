import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your cart is empty</h2>
        <p className="mt-4 text-gray-500">Looks like you haven't added anything yet.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => navigate('/shop')}>Shop Products</Button>
          <Button variant="outline" onClick={() => navigate('/programs')}>View Programs</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
      
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section className="lg:col-span-7">
          <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={`https://picsum.photos/seed/${item.slug}/200/200`}
                    alt={item.name}
                    className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link to={item.type === 'product' ? `/product/${item.slug}` : `/programs/${item.slug}`} className="font-medium text-gray-700 hover:text-gray-800">
                            {item.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-gray-500 capitalize">{item.type}</p>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <div className="flex items-center space-x-3">
                        <button 
                          className="rounded-full p-1 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4 text-gray-500" />
                        </button>
                        <span className="text-gray-900">{item.quantity}</span>
                        <button 
                          className="rounded-full p-1 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>

                      <div className="absolute right-0 top-0">
                        <button
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <span className="sr-only">Remove</span>
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </section>

        {/* Order Summary */}
        <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">${cartTotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600">Shipping estimate</p>
              <p className="text-sm font-medium text-gray-900">Calculated at checkout</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <p className="text-base font-medium text-gray-900">Order total</p>
              <p className="text-base font-medium text-gray-900">${cartTotal.toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-6">
            <Button className="w-full" size="lg" onClick={() => navigate('/checkout')}>
              Checkout
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
