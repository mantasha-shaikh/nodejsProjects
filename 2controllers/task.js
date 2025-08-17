const Task = require('../4models/Task');
const asyncWrapper = require('../5middleware/async')
const {createCustomErroe}=require('../error/custom-error')

// Get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {

        const tasks = await Task.find({});
        res.status(200).json({ tasks: tasks });
        //   res.status(200).json({tasks });
        //     res.status(200).json({ tasks,amount:tasks.length });
        //       res.status(200).json({ status:"sucess",data:{task,nbhits:tasks.length} });
        
        // first is key name, second is variable
    
});

// Create a new task
const createTask = asyncWrapper(async (req, res) => {
  
        const task = await Task.create(req.body);
        res.status(200).json({ task }); // check in Postman (Body -> raw -> JSON)
        console.log(task);
   
});

// Get a single task by ID
const getTaskID = asyncWrapper(async (req, res,next) => {
    
        const { id: taskID } = req.params; // take req.params.id and store as taskID
        const task = await Task.findOne({ _id: taskID });

        if (!task) {
                        return next(createCustomErroe( `No task found with id: ${taskID}`,404));
            // const error =new Error('not found')
            // error.status=404
            // return next(error)
            // return res.status(404).json({ msg: `No task found with id: ${taskID}` });
        }

        res.status(200).json(task);
   
});



// Delete a task
const deleteTask =asyncWrapper( async (req, res) => {
  
        const { id: taskID } = req.params;
        const tasks = await Task.findByIdAndDelete({ _id: taskID });

        if (!tasks) {
                                    return next(createCustomErroe( `No task found with id: ${taskID}`,404));
            // return res.status(404).json({ msg: `No task found with id: ${taskID}` });
        }

        res.status(200).json({ tasks: tasks });
   
});




// Update a task (placeholder)
const updateTask = asyncWrapper(async(req, res) => {
    // res.send('Update task here');
    

const {id:taskID} =req.params
const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
    new:true,//this for not emty updt
    runValidators:true
})
  if (!task) {
                            return next(createCustomErroe( `No task found with id: ${taskID}`,404));
            // return res.status(404).json({ msg: `No task found with id: ${taskID}` });
        }
// res.status(200).json({id:taskID,data:req.body})//check not fake 

res.status(200).json({task})

  
});





module.exports = {
    getAllTasks,
    createTask,
    getTaskID,
    updateTask,
    deleteTask,
    // editTask,
};





//demo
// const editTask=async(req, res) => {
//     // res.send('Update task here');
//     try{

// const {id:taskID} =req.params
// const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
//     new:true,//this for not emty updt
//     runValidators:true,
//     overwrite:true,
// })
//   if (!task) {
//             return res.status(404).json({ msg: `No task found with id: ${taskID}` });
//         }
// // res.status(200).json({id:taskID,data:req.body})//check not fake 

// res.status(200).json({task})

//     }
//       catch (err) {
//         res.status(500).json({ msg: err });
//     }
// };

// try and catch removed