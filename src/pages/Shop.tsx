import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export default function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Shop</h1>
        <p className="mt-4 text-base text-gray-500">
          Explore our collection of premium goods designed for the modern lifestyle.
        </p>
      </div>

      <div className="pt-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
