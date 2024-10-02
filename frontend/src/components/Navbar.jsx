import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-pink-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
          Home
        </a>
        <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
          About Us
        </a>
        <a href="/update" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
          Updates
        </a>
        {/* Conditionally render the "Login" button */}
        {location.pathname !== '/Posts' && (
          <a href="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Login
          </a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
