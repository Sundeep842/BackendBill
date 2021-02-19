const  express =require( 'express')
const items = require("../models/item")
const bills = require("../models/bill")

const mongoose = require("mongoose")


const router = express.Router()
router.get('/',async(req,res)=>{
   // const Items = mongoose.model('items', items);
    //const item = new items({
    //item:"Scale",
    //    Price: 10,Quantity:10
    //});
    //await item.save();
    const z=await items.find({item:"Scale"}).exec()
    //console.log(z)

    res.send({z})

}
)
router.post('/',async(req,res)=>{
    
    const bill = new bills({item:req.body.m.cart.item,Price:req.body.m.cart.price,Quantity:req.body.m.cart.quantity})
    await bill.save()
    console.log(req.body)
    res.send("generated")
 }
 )

 module.exports = router; 

