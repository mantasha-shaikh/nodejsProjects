


const getAllProductsStatic = async(req,res)=>{
    res.status(200).json({msg:`products testing route`})
    // throw new Error('tsting async eroor hurry')//yeh check karne naya module expresasync work or not

}

const getAllProducts =async(req,res)=>{
    res.status(200).json({msg:`products only one`})
}

module.exports={
    getAllProductsStatic,
    getAllProducts
}