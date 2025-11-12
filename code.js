// ai_modules/code.js
const axios = require('axios');

exports.runCodeGen = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const body = {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const response = await axios.post(endpoint, body, { headers });
  return response.data.choices?.[0]?.message?.content || 'No code generated';
};
