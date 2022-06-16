// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Comment } from '../../typings'

const commentQuery = groq`
  *[_type == 'comment' && references(*[_type =='tweet' && _id == 'e49ebfb4-870f-467b-ae4e-a7aab04ee5e1']._id)] {
    _id,
    ...
  } | order(_createdAt desc)
`

type Data = Comment[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tweetId } = req.query

  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    tweetId
  })

  res.status(200).json(comments)
}
