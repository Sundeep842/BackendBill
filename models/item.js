const mongoose= require("mongoose")
const itemschema =
        mongoose.Schema(
            {
                item:String,
                Price: {type:Number},
                Quantity: {type:Number},
                
            }
        )


module.exports= mongoose.model("items",itemschema)