
const  {getAllProductsStatic,getAllProducts} = require('../3Controllers/Cont_Prod')
const express = require('express')
const app = express()
const router = express.Router()

router.route('/').get(getAllProductsStatic)
router.route('/static').get(getAllProductsStatic)

module.exports=router