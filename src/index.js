const express = require('express');

const server = express()
server.use(express.json())


const projects = [
  { "id": "1", "title": "New project 1", "tasks": ["coding", "debbuging"] }, 
  { "id": "2", "title": "New project 2", "tasks": ["coding", "debbuging"] }, 
]

server.post('/projects', (req,res,next)=>{
  const {id, title, tasks} = req.body
  projects.push({id, title, tasks})
  return res.json(projects)
}) 

server.post('/projects/:id/tasks', (req,res,next)=>{
  const { id } = req.params
  const { title } = req.body
  projects.map(p => p.id===id? p.tasks.push(title):p)
  return res.json(projects)
}) 

server.get('/projects', (req,res,next)=>{
  return res.json(projects)
}) 

server.get('/projects/:id', (req,res,next)=>{
  const { id } = req.params
  return res.json(projects[id - 1])
}) 

server.put('/projects/:id', (req,res,next)=>{
  const { id } = req.params
  const { title } = req.body
  projects.map(p => p.id===id? p.title=title:p)
  return res.json(projects[id - 1])
})

server.delete('/projects/:id', (req,res,next)=>{
  const { id } = req.params
  projects.splice(id-1, 1)
    return res.json(projects[id - 1])
})

server.listen(3333)
