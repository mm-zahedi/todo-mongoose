const Todo = require("./../model/Todo");

exports.getIndex = async (req, res) => {
    const completedTodos = await Todo.countDocuments({ completed: true });
    const todos = await Todo.find();

    res.render("index", {
        pageTitle: "کار های روز مره",
        todos,
        completedTodos,
        remainingTodos: todos.length - completedTodos,
    });
};
