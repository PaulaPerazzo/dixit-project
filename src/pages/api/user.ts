// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from 'bson'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method === 'GET'){
        const users = await prisma.user.findMany({})
        res.json(users);
    }
    if(req.method === 'POST'){
        const {name, email, password} = req.body;
        try {
            const user = await prisma.user.create({
              data: {
                name,
                email,
                password,
              },
            });
            res.json(user);
          } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'An error occurred while creating the user.' });
          }
    }
}
