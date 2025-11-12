// client/src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🇮🇳 INDIAGPT</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-green-400">Home</a>
        <a href="/playground" className="hover:text-green-400">Playground</a>
        <a href="/about" className="hover:text-green-400">About</a>
      </div>
    </nav>
  );
}
