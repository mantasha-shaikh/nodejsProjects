const { log } = require('console');
const  express = require('express')
const  router = express.Router()
const {getAllTasks,createTask,getTaskID,updateTask,deleteTask} = require('../2controllers/task')

// router.route('/').get((req,res)=>{
//     res.send('all items')
// })
router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTaskID)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)
// router.route('/:id').put(editTask)
    
module.exports=router;