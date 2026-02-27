import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Button } from './Button';
import { useCart } from '../context/CartContext';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={`https://picsum.photos/seed/${product.slug}/500/500`}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-medium text-gray-900">
          <Link to={`/product/${product.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <div className="mt-4 flex flex-1 items-end justify-between">
          <p className="text-base font-medium text-gray-900">${product.price.toFixed(2)}</p>
          <Button
            size="sm"
            variant="secondary"
            className="z-10"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'product');
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
