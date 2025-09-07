
const express =require('express')
const app = express()
const {login,dashboard}=require('../5Routes/6main.js')
const authorizationMiddleware = require('../1middeleware/auth.js')
const { model } = require('mongoose')

const router = express.Router()
router.route('/dashboard').get(authorizationMiddleware,dashboard)
router.route('/login').post(login)



module.exports=router