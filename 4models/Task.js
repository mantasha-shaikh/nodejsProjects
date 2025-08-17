const mongoose = require('mongoose');

// Schema define
const TaskSchema = new mongoose.Schema({
    name: {//validation
        type: String,
        required: [true, 'Must provide a task name'],
        trim: true,
        maxlength: [20, 'Name cannot be longer than 20 characters']
    },
    complete: {
        type: Boolean,
        default: false
    }
});

// Model export
module.exports = mongoose.model('Task', TaskSchema);
