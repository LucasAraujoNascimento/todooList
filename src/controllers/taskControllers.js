
const taskSchema = require('../modelSchema/taskSchema');

const allTasks = async (req,res) => {
    
    try{
        const doc = await taskSchema.find({});
        res.render('index', {tasks: doc})
    }catch(error){
        res.send(error);
    }
}

const addTask = async(req,res) => {
    
    const task = new taskSchema(req.body)

    try{
        const doc = await task.save()
        res.redirect('/');
    }catch(error){
        res.send(error);
    }
}

const taskById = async(req,res) => {

    let id = req.params.id

    try{
        const doc = await taskSchema.findById(id);
        res.render('edit', {tasks: doc});
    }catch(error){
        res.send(error);
    }

}

const editTask = async(req, res) => {

    let obj = {}
    obj.task = req.body.task;
    obj.description = req.body.description;

    let id = req.params.id
    if(!id){ id = req.body.id }

    try{
        let doc = await taskSchema.updateOne({_id:id}, obj)
        res.redirect('/');
    }catch(error){
        res.send(error);
    }
}

const deleteTask = async(req, res) =>{

    let id = req.params.id
    if(!id){ id = req.body.id } 

    try{
        const doc = await taskSchema.findByIdAndDelete(id);
        res.redirect('/');
    }catch(error){
        res.send(error);
    }
}

module.exports = {allTasks, addTask, deleteTask, taskById, editTask};