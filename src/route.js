const express = require('express')
const multer = require('multer')
const adminAuth =require('./config/adminAuth')
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const LoginController = require('./controllers/LoginController')
const User = require('./models/User')
const Product = require('./models/Product')
const uploadConfig = require('./config/upload')
const verifyToken = require('./config/tokenVerif')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/',(req,res)=>{
    res.send('running on express server....')
})
//find all users
routes.get('/users',verifyToken,adminAuth, async (req,res)=>{
    User.find(( err,user) => res.send(user)
    )
})
// get method  user bye id
routes.get('/user/:userid',verifyToken,LoginController.getUsername)

//Login 
routes.post('/login',LoginController.userLogin)

//produit
routes.get('/products',verifyToken,ProductController.getAllProducts)
routes.get('/products/:category',verifyToken,ProductController.getByCategory)
routes.get('/product/:productid',ProductController.getProductByid)
routes.post('/product',verifyToken,upload.single('img'),ProductController.createProduct)
routes.delete('/product/:productid',verifyToken,ProductController.delete)
routes.patch('/update/:id', async (req,res)=>{
try {
    const id = req.params.id
    const name  = req.body
    const price = req.body
    const result =  await Product.findByIdAndUpdate(id,name,price)
    res.send(result)
} catch (error) {
   console.log(error+'errr')    
}


})
//user
 routes.post('/register',UserController.store)
 //routes.post('/user/:userid',UserController.getUserByid)



 module.exports = routes
