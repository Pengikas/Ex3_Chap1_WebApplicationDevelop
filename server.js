import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = process.env.PORT || 3000
const currentFile = fileURLToPath(import.meta.url)
const currentDirectory = path.dirname(currentFile)

app.use(express.json())

app.get('/api/hello', (_request, response) => {
  response.json({
    message: 'Hello World',
  })
})

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  })
})

app.use(express.static(path.join(currentDirectory, 'dist')))

app.use((_request, response) => {
  response.sendFile(path.join(currentDirectory, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Hello World API running on port ${port}`)
})
