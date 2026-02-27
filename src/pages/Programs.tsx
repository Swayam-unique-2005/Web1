import { programs } from '../data/programs';
import { ProgramCard } from '../components/ProgramCard';

export default function Programs() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Programs</h1>
        <p className="mt-4 text-base text-gray-500">
          Accelerate your career and personal growth with our expert-led courses.
        </p>
      </div>

      <div className="pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}
