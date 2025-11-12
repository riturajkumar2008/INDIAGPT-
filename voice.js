// ai_modules/voice.js
const axios = require('axios');

exports.runVoiceGen = async (text) => {
  const apiKey = process.env.VOICE_API_KEY;
  const endpoint = 'https://your-voice-api.com/speak';

  const body = { text };
  const headers = { 'Authorization': `Bearer ${apiKey}` };

  const response = await axios.post(endpoint, body, { headers });
  return response.data.audio_url || 'No voice generated';
};
