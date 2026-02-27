import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              {siteConfig.footer.links.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
