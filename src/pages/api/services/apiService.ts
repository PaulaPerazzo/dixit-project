// utils/openaiUtils.ts
import axios from 'axios';
const fs = require('fs');
const path = require('path');

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});

export async function getGPT4Response(text: string): Promise<string> {
  try {
    const response = await openaiApi.post('/chat/completions', {
      model: 'gpt-4',
      messages: [{ role: 'user', content: text }],
      temperature: 0,
      max_tokens: 1024,
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    return '';
  }
}