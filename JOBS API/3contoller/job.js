const Jobs = require("../5model/jobs");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, NotFound } = require("../4Error");

const getAllJobs = async (req, res) => {
  const jobs = await Jobs.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
  // res.send("get all jobs")
};

const getJobs = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Jobs.findOne({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFound(`No job with ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
  // res.send("only jobs")
};

const createjobs = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Jobs.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });

  // res.json(req.body)
  // res.json(req.user)//check to header_>write auth and key  values baere token valuee
};
const updatejobs = async (req, res) => {

    const {
     body:{company,position},
    user: { userId },
    params: { id: jobId },
  } = req;
  if (company === '' || position === '') {
    throw new BadRequest("Company and position fields cannot be empty");
  }

  const job = await Jobs.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new NotFound(`No job with ${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
};




const deletjobs = async (req, res) => {
    const {
        user:{userId},
        params:{id:jobId},
        
    }=req
    const job = await Jobs.findOneAndDelete({
    _id: jobId,       // correct field name
    createdBy: userId // user check
});

if(!job){
    throw new NotFound(`no such job id ${jobId}`)
}
res.status(StatusCodes.OK).send()

//   res.send("delete jobs");

  
};

module.exports = {
  getAllJobs,
  getJobs,
  createjobs,
  updatejobs,
  deletjobs,
};
