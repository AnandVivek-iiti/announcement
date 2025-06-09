import { useState, type JSX } from 'react';
// import React from 'react'
import iiti from './iiti.png';
interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '#', current: true },
  { name: 'Clubs', href: '#', current: false },
  { name: 'Announcement', href: '#', current: false },
  { name: 'Registration', href: '#', current: false },
  { name: 'Notification', href: '#', current: false },
];

function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          {/* Logo */}
          <a href="https://www.iiti.ac.in"> <img id="thelogo" src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png"  className="logo h-30 w-30" alt="Images-Logo-4"/></a>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'text-white font-semibold'
                    : 'text-gray-300 hover:text-white transition',
                  'text-sm'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <form className="hidden md:flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search here"
              className="px-3 py-1 rounded-md bg-white text-black border border-gray-300 focus:outline-none w-64"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded-md transition"
            >
              Search
            </button>
          </form>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white text-sm"
              >
                {item.name}
              </a>
            ))}
            <form className="flex flex-col gap-2 mt-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Search here"
                className="px-3 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-md"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}
