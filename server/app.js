import express from 'express'
import postsRoutes from './routes/posts.routes.js'
import fileupload from 'express-fileupload'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//Midlewares
app.use(express.json())
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

//rutas
app.use(postsRoutes)
console.log(__dirname)
app.use(express.static(join(__dirname, '../client/build')))


export default app