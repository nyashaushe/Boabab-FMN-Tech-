import React from 'react';
import { products } from '../data/products';
import { ArrowRight, Zap } from 'lucide-react';
import { getFeatureIcon } from '../data/features';
import { Button } from './ui/Button';

export default function ProductGrid() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose from our suite of professional software solutions
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500 dark:text-gray-400">
                    New Release
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                    {product.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                    <a href={`#product-${product.id}`}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  {product.features.map((feature, index) => {
                    const Icon = getFeatureIcon(product.featureIcons?.[index] || 'sparkles');
                    return (
                      <div key={feature} className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    ${product.price}/mo
                  </div>
                  <Button
                    variant="ghost"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                    onClick={() => window.location.href = `#product-${product.id}`}
                  >
                    Learn more
                  </Button>
                  <Button
                    variant="primary"
                    className="ml-auto"
                    rightIcon={<Zap className="h-4 w-4" />}
                    onClick={() => window.location.href = '#demo'}
                  >
                    Try Demo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}