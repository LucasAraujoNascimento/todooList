const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/taskControllers')

const methodOverride = require('method-override')
router.use(methodOverride('_method'));


router.get('/', taskControllers.allTasks);
router.get('/edit/:id', taskControllers.taskById);

router.post('/', express.urlencoded({extended: true}), taskControllers.addTask);
router.post('/edit/:id', express.urlencoded({extended: true}), taskControllers.editTask)


router.delete('/', express.urlencoded({extended: true}), taskControllers.deleteTask);
router.delete('/:id', taskControllers.deleteTask);






module.exports = router