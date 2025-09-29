const register =async(req,res)=>{
res.send('register here')
}

const login =async(req,res)=>{
    res.send("login")
}


module.exports ={
    login,
    register
}