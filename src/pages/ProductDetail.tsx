import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Button variant="outline" className="mt-4" onClick={() => navigate('/shop')}>
          Back to Shop
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-blue-600" onClick={() => navigate('/shop')}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
      </Button>
      
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={`https://picsum.photos/seed/${product.slug}/800/800`}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6 text-base text-gray-700">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <Button
              size="lg"
              className="w-full"
              onClick={() => addToCart(product, 'product')}
            >
              Add to Cart
            </Button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-600">
              <li>Premium materials</li>
              <li>Ethically sourced</li>
              <li>2-year warranty</li>
              <li>Free shipping on orders over $100</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
