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
  const project = req.body
  projects.push({project})
  return res.json({project})
}) 


server.get('/projects', (req,res,next)=>{
  return res.json(projects)
}) 

server.get('/projects/:id', (req,res,next)=>{
  const { id } = req.params
  return res.json(projects[id - 1])
}) 


server.put('/projects/:id', (req, res, next)=>{
  
  /*
The route must change only the title of the project with the id present in the 
parameters of the route;
*/
})


server.listen(3000)