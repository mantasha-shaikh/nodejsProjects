const getAllTasks = (req,res)=>{
    res.send('all items from file')
}

const createTask = (req,res)=>{
    res.json(req.body)//url mai ja kar postman check karna hai body_script_json  write show on body 
}

const getTaskID = (req,res)=>{
    res.json({id:req.params.id})//direct dikh raha body mai  id jo type karnege 
}

const updateTask = (req,res)=>{
    res.send('Update task here')
}

const deleteTask= (req,res)=>{
    res.send('dlete a task here')
}



module.exports = {
    getAllTasks,
    createTask,
    getTaskID,
    updateTask,
    deleteTask

}