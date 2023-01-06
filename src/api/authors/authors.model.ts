import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  posts: [{ type: Object }],
})

const Author = mongoose.model('Author', AuthorSchema)

export default Author
