import React from 'react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative isolate space-y-8 sm:space-y-0">
                <div className="relative z-10 rounded-2xl bg-white/5 p-8 backdrop-blur">
                  <figure className="font-semibold leading-6">
                    <blockquote className="text-sm text-gray-300">
                      <p>"{testimonial.content}"</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img
                        className="h-10 w-10 rounded-full bg-gray-800 object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div>
                        <div className="text-base text-white">{testimonial.name}</div>
                        <div className="text-sm text-indigo-400">{testimonial.company}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}