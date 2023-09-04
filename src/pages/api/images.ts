import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import OpenAI from "openai";
import Configuration from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method === 'GET'){
        
    }
    if(req.method === 'POST'){
        const {type, text} = req.body;
        const completion = await openai.images.generate({
            prompt: text,
            n: 1,
            size: "256x256",
          });

        return res.status(200).send(completion.data[0]);
    }
}
