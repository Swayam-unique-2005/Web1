import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Have questions about our products or programs? We're here to help.
              </p>
              <div className="mt-8 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex items-center gap-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>support@zenith.com</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>123 Innovation Dr, Tech City, CA</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Sales</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd><a className="font-semibold text-black" href="mailto:sales@zenith.com">sales@zenith.com</a></dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Support</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd><a className="font-semibold text-black" href="mailto:support@zenith.com">support@zenith.com</a></dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <form className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                <div className="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                <div className="mt-2.5">
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full">Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
