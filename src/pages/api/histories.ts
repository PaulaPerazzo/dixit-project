import type { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from 'bson'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method === 'GET'){

    }
    if(req.method === 'POST'){
        const {user_id, history} = req.body;
        // encontra o usuário => cria uma historia no array de historias do usuário

    }
}
