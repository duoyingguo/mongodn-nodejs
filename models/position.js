var mongoose = require('mongoose');
// 引入Mongo的Schema
var Schema = mongoose.Schema;

// 自定义一个js模型映射
var PositionSchema = new Schema({
    account: {type :String,required: true},
    stock: {type: String,required: true},
    quantity: {type:Number,required: true},
    price: {type:Number,required:true}

});

// 将其暴露出去
module.exports = mongoose.model('Position',PositionSchema);
