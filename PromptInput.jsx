// client/src/components/PromptInput.jsx
import React, { useState } from 'react';

export default function PromptInput() {
  const [prompt, setPrompt] = useState('');

  const handleRun = () => {
    console.log('Running prompt:', prompt);
    // Later: Send to backend API
  };

  return (
    <div className="mt-6">
      <textarea
        className="w-full p-4 rounded bg-black text-white border border-green-500"
        rows="4"
        placeholder="Type your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={handleRun}
      >
        Run ▶
      </button>
    </div>
  );
}
