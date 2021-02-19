const mongoose= require("mongoose")
const billSchema =
        mongoose.Schema(
            {
                item:String,
                Price: {type:Number},
                Quantity: {type:Number},
                billDate:Date
                
            }
        )


module.exports= mongoose.model("bills",billSchema)