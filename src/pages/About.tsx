export default function About() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://picsum.photos/seed/zenith-about/1920/1080?blur=4"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Zenith</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We believe in the intersection of form, function, and personal growth. Our mission is to curate products and knowledge that elevate your daily life.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Philosophy</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In a world of noise, we seek clarity. Zenith was founded on the principle that the objects we surround ourselves with and the skills we acquire shape who we become.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We carefully select every item in our shop for its durability, aesthetic appeal, and utility. Our educational programs are crafted by industry experts to provide actionable, high-impact learning.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://picsum.photos/seed/office-1/400/500"
              alt="Office"
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://picsum.photos/seed/office-2/400/500"
              alt="Team"
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
