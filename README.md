# gostack-first-challenge
#1 Challenge : 

NodeJS Concepts
“Your only limitation is yourself”!


Create an application to store projects and their tasks from scratch 
using Express.

Routes
POST | projects: 
The route must receive id and title within the body and register a new project 
within an array in the following format: 
{ 
  id: "1", 
  title: 'New project', 
  tasks: []
}; 
Make sure to send both the project ID and the title in string format with 
double quotes.



GET | projects: 
Route that lists all projects and their tasks;

PUT | projects/:id: 
The route must change only the title of the project with the id present in the 
parameters of the route;

DELETE | projects/:id: 
The route must delete the project with the id present in the route parameters;

POST | projects/:id/tasks: 
The route must receive a title field and store a new task in the task array of 
a specific project chosen through the id present in the route parameters;


Example
If I call the 
POST | projects route by passing 
{
  id: 1, 
  title: 'New project'
} 

and the 
POST | projects/1/tasks route with 
{ 
  title: 'New task'
}, 

my array of projects should look like this:
[
  {
    id: "1",
    title: "New project",
    tasks: ["New task"]
  }
];


Middlewares
Create middleware that will be used on all routes that receive the project ID 
in the URL parameters that verify that the project with that ID exists. 
If it does not exist, return an error, otherwise allow the request 
to continue normally;

Create a global middleware called on every request that prints (console.log) 
a count of how many requests have been made in the application so far;