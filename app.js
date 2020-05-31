// include packages 
const express = require('express')

// setup server
const app = express()
const port = 3000

var middleware = function (req, res, next) {
  req.reqDate = new Intl.DateTimeFormat().format()
  req.reqTime = new Date()
  req.reqLocalTime = req.reqTime.toLocaleTimeString()
  console.log(req.reqDate, req.reqLocalTime, '|', req.method, 'path from', req.url)
  next()
}

// app.js
app.get('/', middleware, (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', middleware, (req, res) => {
  res.send('新增 Todo 頁面')
})
app.get('/:id', middleware, (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', middleware, (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})