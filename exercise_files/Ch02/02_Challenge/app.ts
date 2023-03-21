//Check solution here

enum Status {
  InProgress = "in-progress",
  ToDo = "todo",
  Done = "done",
}

interface ToDo {
  id: number;
  title: String;
  status: Status;
  completedOn?: Date;
}

const todoItems = [
  {
    id: 1,
    title: "Learn HTML",
    status: Status.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: Status.InProgress },
  { id: 3, title: "Write the best app in the world", status: Status.ToDo },
];

function addTodoItem(todo) {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: "todo",
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId(items) {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
