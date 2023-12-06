const mongoose = require("mongoose");
const {Schema} = mongoose;

const CartSchema = new Schema({
    items:{
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('items',CartSchema);