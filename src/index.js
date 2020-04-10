const express = require('express');
const { uuid } = require('uuidv4')
const server = express()
server.use(express.json())

const projects = [ ]

projectsIndex = (ps, id)=>ps.findIndex(p => p.id===id)


server.get('/projects', (req,res,next)=>{
  return res.json(projects)
}) 

server.post('/projects', (req,res,next)=>{
  const {title, tasks} = req.body
  const project = { id: uuid(), title, tasks}
  projects.push(project)
  return res.json(project)
}) 

server.post('/projects/:id/tasks', (req,res,next)=>{
  const { id } = req.params
  const { title } = req.body

  pi = projectsIndex(projects, id)
  if(pi < 0) { return res.status(400).json({error:"There's no project with this id"}) }

  projects[pi].tasks.push(title)
  return res.json(projects)
}) 

server.get('/projects/:id', (req,res,next)=>{
  const { id } = req.params

  pi = projectsIndex(projects, id)
  if(pi < 0) { return res.status(400).json({error:"There's no project with this id"}) }
  return res.json(projects[pi])
}) 

server.put('/projects/:id', (req,res,next)=>{
  const { id } = req.params
  const { title, tasks } = req.body

  pi = projectsIndex(projects, id)
  if(pi < 0) { return res.status(400).json({error:"There's no project with this id"}) }
  const project = { id, title, tasks }
  projects[pi] = project
  return res.json(projects[pi])
})

server.delete('/projects/:id', (req,res,next)=>{
  const { id } = req.params

  pi = projectsIndex(projects, id)
  if(pi < 0) { return res.status(400).json({error:"There's no project with this id"}) }
  projects.splice(pi, 1)
  return res.json(projects[pi])
})

server.listen(3333)
