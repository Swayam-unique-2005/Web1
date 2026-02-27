import { Link } from 'react-router-dom';
import { Program } from '../data/programs';
import { Button } from './Button';
import { useCart } from '../context/CartContext';
import { Clock, BarChart } from 'lucide-react';

export function ProgramCard({ program }: { program: Program }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={`https://picsum.photos/seed/${program.slug}/800/450`}
          alt={program.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            {program.duration}
          </div>
          <div className="flex items-center">
            <BarChart className="mr-1 h-3 w-3" />
            {program.level}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          <Link to={`/programs/${program.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {program.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{program.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">${program.price.toFixed(2)}</p>
          <Button
            size="sm"
            className="z-10"
            onClick={(e) => {
              e.preventDefault();
              addToCart(program, 'program');
            }}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}
