import React from 'react';
import { ArrowRight, Sparkles, Rocket, Shield, Globe } from 'lucide-react';

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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Business with Smart Software Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your business with our suite of digital products. From CRM to AI chatbots, we provide the tools you need to succeed in the digital age.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#products"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore Products
            </a>
            <a href="#demo" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: 'AI-Powered', description: 'Advanced artificial intelligence integration' },
            { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security protocols' },
            { icon: Globe, title: 'Global Scale', description: 'Worldwide infrastructure' },
            { icon: Rocket, title: 'Fast Deploy', description: 'Quick implementation' },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm">
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}