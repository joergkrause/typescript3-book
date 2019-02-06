interface Todo {
  id: number;
  text: string;
  due: Date;
}

type TodoKeys = keyof Todo;

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const todo = {
  id: 1,
  text: 'Buy milk',
  due: new Date(2019, 1, 31)
};

const id = prop(todo, 'id'); // number
const text = prop(todo, 'text'); // string
const due = prop(todo, 'due'); // Date



