//Check solution here

enum Status {
  InProgress = "in-progress",
  ToDo = "todo",
  Done = "done",
}

interface ToDo {
  id: number
  title: string
  status: Status
  completedOn?: Date
}

const todoItems: ToDo[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: Status.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: Status.InProgress },
  { id: 3, title: "Write the best app in the world", status: Status.ToDo },
]

function addTodoItem(task: string): ToDo {
  const id = getNextId(todoItems);

  const newToDo = {
    id,
    title: task,
    status: Status.InProgress,
  }

  todoItems.push(newToDo);

  return newToDo;
}

function getNextId<T extends {id: number}>(items: T[]):number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
