import { useParams, useNavigate } from 'react-router-dom';
import { programs } from '../data/programs';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CheckCircle, Clock, BarChart, Calendar } from 'lucide-react';

export default function ProgramDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Program not found</h2>
        <Button variant="outline" className="mt-4" onClick={() => navigate('/programs')}>
          Back to Programs
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-900 py-24 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <img
            src={`https://picsum.photos/seed/${program.slug}/1920/600`}
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="mb-8 pl-0 text-white hover:bg-white/10 hover:text-white" 
            onClick={() => navigate('/programs')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Programs
          </Button>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{program.name}</h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">{program.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">What you'll learn</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-600">Master key concepts and practical skills in this domain.</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">Curriculum</h2>
              <div className="mt-6 space-y-4">
                {[1, 2, 3, 4].map((module) => (
                  <div key={module} className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-semibold text-gray-900">Module {module}: Core Foundations</h3>
                    <p className="mt-1 text-sm text-gray-500">Detailed breakdown of the topics covered in this week.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <p className="text-3xl font-bold text-gray-900">${program.price.toFixed(2)}</p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-3 h-5 w-5" />
                  <span>{program.duration} Duration</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BarChart className="mr-3 h-5 w-5" />
                  <span>{program.level} Level</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="mr-3 h-5 w-5" />
                  <span>Self-paced access</span>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-8 w-full"
                onClick={() => addToCart(program, 'program')}
              >
                Enroll Now
              </Button>
              <p className="mt-4 text-center text-xs text-gray-500">
                30-day money-back guarantee. Lifetime access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
