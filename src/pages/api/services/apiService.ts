// utils/openaiUtils.ts
import axios from 'axios';
const fs = require('fs');
const path = require('path');
import OpenAI from "openai";

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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

export async function getCardHistories(text: String, type: String): Promise<string>{
  try{

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{"role": "system", "content": `Generate a story based on the parameters text = "${text}" and type = "${type}". The story will consist of 1 paragraph with a maximum of 1513 characters and will revolve around this context.`}],
    });

    return response.choices[0].message.content || "";
  } catch (error) {
    console.error('Error:', error);
    return '';
  }
}