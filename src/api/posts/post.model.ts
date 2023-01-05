import * as z from 'zod'
import { WithId } from 'mongodb'
import { db } from '../../database/db'

export const Post = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  author: z.string().default('John Doe'),
  isPublished: z.boolean().default(false),
})

export type Post = z.infer<typeof Post>
export type PostWithId = WithId<Post>
export const Posts = db.collection<Post>('posts')
