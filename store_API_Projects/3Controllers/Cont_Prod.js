// MongoDB Operators ka short note
// $eq   → equal to (=)
// $ne   → not equal to (≠)
// $in   → value array ke andar hona chahiye
// $nin  → value array ke andar nahi hona chahiye
// $regex → pattern match (search ke liye use hota hai)
// $options: "i" → case-insensitive search (A = a)

const product_model = require('../5model/Proucts_model')

//  Static wala route (fixed search ke liye)
const getAllProductsStatic = async(req,res)=>{
    // const serach = 'a'   // ye fixed hai abhi (har product jisme "a" ho usko uthayega)

    const product = await product_model.find({
        // example: name me "a" aana chahiye
        // name: { $regex: serach, $options: 'i' }  last atge
        // $options: 'i' → case ignore karega (A ya a same)
        price:{$gt:30 }

    }).sort('sort').select('name price').limit(4).skip(2)//limit matlb kitna data dikhe ga
console.log("Sorted products (Z → A):");
    res.status(200).json({ product, nbHits: product.length })
    // nbHits = kitne products aaye total count
}



//  Dynamic wala route (user ke query params ke hisaab se)
const getAllProducts = async(req,res)=>{
    const { feature, company, name,sort ,fields,numericfilters} = req.query   // jo querystring me likha hoga usko destructure kar liya
    const objectquery = {}  // empty object banaya filter collect karne ke liye

    // agar featured diya hoga query me → string ko boolean me convert karna hai
    if(feature){
        objectquery.featured = feature === 'true' ? true : false
    }

    // agar company diya hoga query me
    if(company){
        objectquery.company = company
    }

    // agar name diya hoga query me
    if(name){
        objectquery.name = { $regex: name, $options: 'i' }  
        // http://localhost:5000/api/v1/products/?company=ikea&featured=false&name=d
        // iska matlab: company=ikea, featured=false, aur name me "d" ho
    }
    
    // query object use karke data nikal liya
    let result = product_model.find(objectquery)
//     if(sort){
// // product_model =product_model.sort()
// const sortlist = req.query.sort.split(",").join(" ");

// result =result.sort(sortlist)
// console.log(sort);

//     }else{
//         result=result.sort('createAt')
//     }
if (sort) {
  const sortlist = sort.split(',').join(" ");
  result = result.sort(sortlist);
  console.log("Sorting by:", sortlist);
} else {
  result = result.sort("createdAt");
}

if(numericfilters){
    console.log(numericfilters);
      const operatorMap = {
    '>': '$gt',
    '>=': '$gte',
    '=': '$eq',
    '<': '$lt',
    '<=': '$lte',
  };

  const regEx =/\b(>|>=|=|<|<=)\b/g
let filter = numericfilters.replace(
    regEx,
    (match) =>`-${operatorMap[match]}-`)//fn

console.log(`hey filters`+filter);

 const option=['price','rating']//Isliye hum ek allowed fields list banate hain:
filter.split(',').forEach((item)=>{
const [fields,opreator,value]=item.split('-')
if(option.includes(fields)){
    objectquery[fields]={[opreator]:Number(value)}
}
 })
console.log(`new one`+filter);

//   const option =['price','rating']
//   filters=filters.split(',').forEach((item)=>{
//     const [filed,Operators,value]=item.split('-')
//     if(option.includes(fields)){
//         objectquery[filed]={[Operators]:Number(value)}
//     }
//   })
  
// }
//     }
if (fields) {
  const filedlist = fields.split(',').join(" ");
  result = result.select(filedlist);
  console.log("Sorting by:", filedlist);//http://localhost:5000/api/v1/products?sort=name,-price&fields=company,rating
}

const page =Number(req.query.page) || 1
const limit=Number(req.query.limit) || 10
const skip=(page-1)*limit
result = result.skip(skip).limit(limit)
    const newProducts = await result

    console.log(objectquery);  // backend console me dekhne ke liye
    console.log(req.query);    // jo frontend se aya hai wo check karne ke liye

    res.status(200).json({ newProducts, nbHits: newProducts.length })
}
}


//  export functions
module.exports = {
    getAllProductsStatic,
    getAllProducts
}

