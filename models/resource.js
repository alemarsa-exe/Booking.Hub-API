import mongoose, { mongo } from 'mongoose';

const resourceSchema = new mongoose.Schema({
    id:{
        type:String
    },
    seq:{
        type:Number
    }

})

export default mongoose.model("Resource", resourceSchema)