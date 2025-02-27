import React from 'react';
import { Menu, X, Package, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
  // { name: 'Documentation', href: '#docs' },
  { name: 'Support', href: '#support' },
  { name: 'Pricing', href: '#pricing' },
];

// Group navigation items for mobile menu
const mobileNavigation = {
  main: navigation.slice(0, 5), // First 5 items
  secondary: navigation.slice(5), // Remaining items
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Package className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">Boabab Stack</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Package className="h-8 w-8 text-indigo-600" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">Baobab Stack</span>
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </button>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            
            <nav className="mt-6 relative">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                {/* Main navigation */}
                <div className="space-y-1 py-6">
                  {mobileNavigation.main.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Secondary navigation */}
                <div className="space-y-1 py-6">
                  {mobileNavigation.secondary.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="py-6">
                  <a
                    href="#"
                    className="block text-sm font-semibold leading-6 text-white bg-indigo-600 px-4 py-2 rounded-lg text-center hover:bg-indigo-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}