// const express = require('express')
// const app = express();

// app.get('/about', (req, res) => {
//     res.send('hello');
// })

// app.listen(5503)

const express = require('express')
const app = express()
const port = 5503
const path = require('path')

const directory = path.join(__dirname)

app.use(express.static(directory))
app.get('/about', (req, res) => {
    
  res.sendFile('about.html', {root: directory})
//   res.send()

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})