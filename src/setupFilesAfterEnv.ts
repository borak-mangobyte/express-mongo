import { client } from './database/db'

global.afterAll(async () => {
  await client.close()
})
