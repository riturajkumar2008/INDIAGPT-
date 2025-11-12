// client/src/components/Playground.jsx
import React from 'react';
import RunSettings from './RunSettings';
import PromptInput from './PromptInput';

export default function Playground() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">🧠 AI Playground</h2>
      <RunSettings />
      <PromptInput />
    </div>
  );
}
