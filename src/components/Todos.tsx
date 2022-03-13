import React from 'react';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react';
import { ITodoStore, ITodo } from '../stores/TodoStore.types';
import { useStore } from '../stores/TodoStoreContext';

const Todos = () => {
  const store: ITodoStore | any = useStore();

  const renderTodos = (todos: ITodo[]) => {
    if (store?.filter!==""){
      return todos.filter(value=> value.title.includes(store?.filter)).map(todo => <TodoItem todo={ todo } key={ todo.id } />
    )
  }
    else{
          return todos.map(todo => <TodoItem todo={ todo } key={ todo.id } />)
    };
  }

  return (
    <div>
      {renderTodos(store.todos)}
    </div>
  )
}

export default observer(Todos);
