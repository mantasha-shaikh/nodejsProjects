const getAllJobs = async(req,res)=>{
    res.send("get all jobs")
}

const getJobs = async(req,res)=>{
    res.send("only jobs")
}


const createjobs = async(req,res)=>{
    res.send("job is created")
}

const updatejobs = async(req,res)=>{
    res.send("update jobs")
}

const deletjobs = async(req,res)=>{
    res.send("delete jobs")
}


module.exports ={
    getAllJobs,
    getJobs,
    createjobs,
    updatejobs,
    deletjobs
}