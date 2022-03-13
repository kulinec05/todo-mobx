import { destroy, types, getRoot } from 'mobx-state-tree';
import { string } from 'mobx-state-tree/dist/internal';
import { ITodo } from './TodoStore.types';


export const Todo = types
  .model({
    id: types.optional(types.integer, 0),
    title: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggle() {
      self.done = !self.done;
    },
    remove() {
      getRoot(self).removeTodo(self);
    }
  }));

const TodoStore = types
  .model({
    todos: types.optional(types.array(Todo), []),
    filter:types.optional(types.string, "")
  })
  .views((self) => ({
    get getLastID(): number {
      return self.todos.reduce((max, todo) => Math.max(max, todo.id), -1);
    }
  }))
  .actions((self) => ({
    addTodo(title: string) {
      const id = self.getLastID + 1;
      const newTodo = Todo.create({ id, title })
      self.todos.unshift(newTodo);
      console.log(self)
    },
    removeTodo(todo: ITodo) {
      destroy(todo);
    },
    setFilter(title:string){
      self.filter = title
    },
    useFilter(){
      return self.filter
    }

    
    
  }));

export default TodoStore;
