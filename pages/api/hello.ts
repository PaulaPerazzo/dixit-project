// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

//@ts-ignore
export default async (req, res) => {

  await res.revalidate('/');

  return res.status(200).json({ name: 'John Doe' });
};
