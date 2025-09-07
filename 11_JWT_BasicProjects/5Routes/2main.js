const login = async(req,res)=>{
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