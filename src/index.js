const express = require('express');

const server = express()
server.use(express.json())


const projects = [
  {
   "id": "1",
   "title": "New project 1",
   "tasks": [
     "coding",
     "debbuging"]
  }, 
  {
    "id": "2",
    "title": "New project 2",
    "tasks": [
      "coding",
      "debbuging"]
  }
]

server.post('/projects', (req,res,next)=>{
  const {id, title, tasks} = req.body
  projects.push({id, title, tasks})
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
  const { title } = req.query
  projects.map(p => p.id===id? p.title=title:p)
  return res.json(projects[id - 1])
})

server.delete('/projects/:id', (req,res,next)=>{
  const { id } = req.params
  projects.splice(id-1, 1)
    return res.json(projects[id - 1])
})

server.listen(3333)
/*

DELETE | projects/:id: 
The route must delete the project with the id present in the route parameters;

POST | projects/:id/tasks: 
The route must receive a title field and store a new task in the task array of 
a specific project chosen through the id present in the route parameters;
*/
