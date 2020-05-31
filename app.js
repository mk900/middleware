// include packages 
const express = require('express')

// setup server
const app = express()
const port = 3000

// middleware function
var middleware = function (req, res, next) {
  req.reqDate = new Intl.DateTimeFormat().format()
  req.reqTime = new Date()
  req.reqLocalTime = req.reqTime.toLocaleTimeString()
  console.log(req.reqDate, req.reqLocalTime, '|', req.method, 'path from', req.url)
  next()
}
app.use(middleware)

// app.js
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})