const CustomAPIError = require("../1middeleware/error_handlers")
const login = async(req,res)=>{
    const {username,passward}=req.body//likenge  raw oy mai ata haai
    console.log(username,passward)
    //**if lagan agar hum kuch na likhe ho 
    if(!username||!passward){
    throw new CustomAPIError('pls provide your emails and name ',400)
     
    }
       console.log(username,passward)




    

    
    
    res.send('fake/login/signup')
}

const dashboard=async(req,res)=>{
const luckyNum = Math.floor(Math.random()*100)

    res.status(200).json({msg:`hello mantu daoe `,secret:`here is ypur lucku number${luckyNum}nd authorize datab`})
}

modeule.export={
    login,
    dashboard
    
}