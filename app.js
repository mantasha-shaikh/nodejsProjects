const { log } = require('console');
const  express = require('express')
const app = express();
const task = require('./routes/task')

//routes
app.get('/',(req,res)=>{
    res.send("hello tak nanage")
})

//app.get('/api/v1/task') ---get all task 
//app.post('/api/v1/task') ---create  a new  task 
//app.get('/api/v1/task/:id')') --- get a task 
//app.patch('/api/v1/task/:id') ---update a task 
//app.delet('/api/v1/task/:id')') ---dlete a task 




const port = 5000;
app.listen(port,()=>{
console.log(`Server is running at http://localhost:${port}`);
    
})
