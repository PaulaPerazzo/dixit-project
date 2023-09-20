import type { NextApiRequest, NextApiResponse } from 'next'
import { getCardHistories, getGPT4Response } from "./services/apiService";

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method === 'GET'){
        
    }
    if(req.method === 'POST'){
        const {type, text} = req.body;
        
        const response = await getCardHistories(type, text);
        return res.status(200).send(response);
    }
}
