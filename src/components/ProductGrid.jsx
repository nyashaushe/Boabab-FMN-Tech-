import React from 'react';
import { products } from '../data/products';
import { ArrowRight, Star, Shield, Zap, Users, BarChart, MessageSquare } from 'lucide-react';

export default function ProductGrid() {
  return (
    <div className="bg-white py-24 sm:py-32" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Choose from our suite of professional software solutions
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start group">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-500 flex items-center gap-1">
                    <Star className="h-4 w-4" /> New Release
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {product.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`#product-${product.id}`}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{product.description}</p>
                </div>
                
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <h4 className="text-sm font-semibold text-gray-900">Key Features</h4>
                  <ul className="mt-4 grid grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        {getFeatureIcon(index)} {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-x-4">
                  <div className="flex items-center gap-1">
                    <div className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </div>
                    <span className="text-sm text-gray-600">/mo</span>
                  </div>
                  <a
                    href={`#product-${product.id}`}
                    className="flex items-center gap-1 text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    className="ml-auto flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
                    onClick={() => window.location.href = '#demo'}
                  >
                    Try Demo <Zap className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function getFeatureIcon(index) {
  const icons = [
    <Users className="h-4 w-4 text-indigo-600" />,
    <Shield className="h-4 w-4 text-indigo-600" />,
    <BarChart className="h-4 w-4 text-indigo-600" />,
    <MessageSquare className="h-4 w-4 text-indigo-600" />,
    <Zap className="h-4 w-4 text-indigo-600" />
  ];
  return icons[index % icons.length];
}