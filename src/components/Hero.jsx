import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { coreFeatures } from '../data/features';

export default function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Transform Your Business with Smart Software Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Empower your business with our suite of digital products. From SMS to AI chatbots and AI Agents, we provide the tools you need to succeed in the digital age.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              onClick={() => window.location.href = '#products'}
            >
              Explore Products
            </Button>
            <Button
              variant="ghost"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              onClick={() => window.location.href = '#demo'}
            >
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}