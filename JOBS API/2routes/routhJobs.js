

const express =require('express')

const router = express.Router()
const {getAllJobs,getJobs,createjobs,updatejobs,deletjobs}=require('../3contoller/job')
router.route('/').post(createjobs).get(getAllJobs)
router.route('/:id').get(getJobs).delete(deletjobs).patch(updatejobs)


module.exports =router