import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { products } from '../data/products';
import { programs } from '../data/programs';
import { ProductCard } from '../components/ProductCard';
import { ProgramCard } from '../components/ProgramCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredPrograms = programs.slice(0, 2);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://picsum.photos/seed/zenith-hero/1920/1080?blur=2" 
            alt="Hero Background" 
            className="h-full w-full object-cover"
           />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Elevate Your Lifestyle
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover premium products and transformative programs designed to help you live better, work smarter, and grow faster.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/shop">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Shop Products
                </Button>
              </Link>
              <Link to="/programs" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
                View Programs <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          <Link to="/shop" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Programs</h2>
            <Link to="/programs" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Premium Quality</h3>
            <p className="mt-2 text-base text-gray-500">Curated items that meet our high standards.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Shipping</h3>
            <p className="mt-2 text-base text-gray-500">Delivery within 3-5 business days.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Support</h3>
            <p className="mt-2 text-base text-gray-500">24/7 customer service for all your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
