// ai_modules/image.js
const axios = require('axios');

exports.runImageGen = async (prompt) => {
  const apiKey = process.env.IMAGE_API_KEY;
  const endpoint = 'https://your-image-api.com/generate';

  const body = { prompt };
  const headers = { 'Authorization': `Bearer ${apiKey}` };

  const response = await axios.post(endpoint, body, { headers });
  return response.data.image_url || 'No image generated';
};
