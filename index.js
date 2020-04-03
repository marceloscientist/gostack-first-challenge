const express = require('express');

const server = express()
server.use(express.json())
const projects = [
  { 
    id: "1", 
    title: 'New project', 
    tasks: []
  }
]
server.post('/projects', (req,res,next)=>{
  const project = req.body
  projects.push({project})
  console.log(projects)
  res.json({project})
  
}) 

server.listen(3000)