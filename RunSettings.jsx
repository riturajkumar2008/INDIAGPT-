// client/src/components/RunSettings.jsx
import React from 'react';

export default function RunSettings() {
  return (
    <div className="mb-4 p-4 bg-black border border-gray-700 rounded">
      <label className="block mb-2">Model:</label>
      <select className="w-full p-2 bg-gray-800 text-white rounded">
        <option>Gemini 2.5 Pro</option>
        <option>Gemini Flash</option>
        <option>Nano Banana</option>
      </select>

      <label className="block mt-4 mb-2">Temperature:</label>
      <input type="range" min="0" max="1" step="0.1" className="w-full" />

      <label className="block mt-4 mb-2">Tone/Style:</label>
      <input type="text" className="w-full p-2 bg-gray-800 text-white rounded" placeholder="e.g. Formal, Friendly" />
    </div>
  );
}
