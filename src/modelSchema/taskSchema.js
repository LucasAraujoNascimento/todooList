const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{type:String, required:true},
    description:{type:String, required:true},
    date:{type:Date, default:Date.now}
})

module.exports = mongoose.model('task', taskSchema);