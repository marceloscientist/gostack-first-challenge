const express = require('express');

const server = express()
server.use(express.json())
const projects = []

server.post('/projects', (req,res,next)=>{
  const project = req.body
  projects.push({project})
  res.json({project})
  
}) 

server.listen(3000)