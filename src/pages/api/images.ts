import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import OpenAI from "openai";
import Configuration from "openai";

const prompts = [
    "create a new card from dixit but in the theme Modern mythology: 'Gods and goddesses inspired by classical mythology, but adapted for today's world.'",
    "create a new card from dixit but in the theme Surreal cities: 'A floating city with skyscrapers in unusual shapes and streets illuminated by vibrant colors.'",
    "create a new card from dixit but in the theme Time Travel: 'A time machine that takes you to a vibrant, futuristic time.'",
    "create a new card from dixit but in the theme Infinite Cosmos: 'A galaxy filled with stars, unknown planets and extraterrestrial beings'",
    "create a new card from dixit but in the theme The future of transportation: 'A flying car that can travel at the speed of light.'"
]

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const prisma = new PrismaClient()

function formatedPrompt(prompt: String, type: String){
    const promptList = prompts.join(" ");
    return `optimize for me the prompt ${prompt} and have the theme ${type} with no text on the image and in style whimsical, dreamlike, and surreal (it has to be abstract, have vibrant colors and be surrealistic). `;
}

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method === 'POST'){
        const {type, text} = req.body;
        console.log("chegou")
        const editedPrompt = formatedPrompt(text, type)

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{"role": "system", "content": editedPrompt}],
          });

        const newText: string = response.choices[0].message.content || text
        console.log(newText)
        const completion = await openai.images.generate({
            prompt: newText,
            n: 6,
            size: "1024x1024",
          });

        console.log(completion.data)

        return res.status(200).send(completion.data);
    }
}
