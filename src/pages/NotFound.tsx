import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Page not found</p>
        <Link 
          to="/" 
          className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 