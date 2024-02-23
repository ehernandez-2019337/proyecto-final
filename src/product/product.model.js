import mongoose, { Schema, model } from "mongoose"

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category',
        required:true
    },
    onStock: {
        type: Number,
        required: true,
        default: 0
      }
})

export default model('product', productSchema)
