const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
name : String ,
discription:String,
price : Number,
img : String,
category : String,
tel : Number,
region : String
,
date :{type: Date , default:Date.now},
user :{
 type:mongoose.Schema.Types.ObjectId,
 ref :'User'
}
},{
    
})
ProductSchema.set('toJSON',{virtuals : true})
ProductSchema.virtual('img_url').get(function () {return `http://localhost:8000/filename/${this.img}`})
module.exports=mongoose.model('product',ProductSchema)