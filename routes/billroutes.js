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
    const z=await bills.find().exec()
    //console.log(z)

    res.send({z})

}
)


 module.exports = router; 

