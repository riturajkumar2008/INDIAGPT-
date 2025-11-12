// ai_modules/chat.js
const axios = require('axios');

exports.runGeminiChat = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  const body = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const response = await axios.post(endpoint, body, { headers });
  const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
  return text;
};
