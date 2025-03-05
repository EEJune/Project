//const express = require('express') //옛날 방식=>common.js
import express from 'express' //요즘방식=>module
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)