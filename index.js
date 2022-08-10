const express = require('express')
const app = express()
const port = process.env.PORT | 5052
const path = require('path')

const directory = path.join(__dirname)
const public = path.join(__dirname, 'public')
const pages = path.join(__dirname, '/src/pages')
const src = path.join(__dirname, 'src')

app.use('/', express.static(public))
app.use(express.static(pages))
app.use(express.static(src))
app.use(express.static(directory))


app.get('/', (req, res) => {
  res.sendFile('zndex.html', {root: public})
})
app.get('/about', (req, res) => {
  res.sendFile('about.html', {root: pages})
})
app.get('/gallery', (req, res) => {
  res.sendFile('gallery.html', {root: pages})
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  console.log(process.env.PORT)
})