const tasks = [];

module.exports.getAllTasks = async (req, res, next) => {
  res.send({data: tasks});
};

module.exports.createNewTask = (req, res, next) => {
  req.body.id = tasks.length + 1;
  tasks.push(req.body);
  res.send({data: tasks});
};

module.exports.changeTaskInfo = (req, res, next) => {
  tasks.forEach((item, i) => {
    if(item.id === req.body.id) {
      tasks[i] = req.body;
    }
  });
  res.send({data: tasks});
};

module.exports.deleteTask = (req, res, next) => {
  tasks.forEach((item, i) => {
    if(item.id === +req.query.id ) {
      tasks.splice(i, 1);
    }
  });
  res.send({data: tasks});
};