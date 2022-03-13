import React from 'react';
import { observer } from 'mobx-react';
import { ITodo } from '../stores/TodoStore.types';
import './TodoItem.scss';
import cx from 'classnames';

interface ITodoItemProps {
  todo: ITodo,
}

const TodoItem = (props: ITodoItemProps) => {
  const { done, title, remove, toggle } = props.todo;

  return (
    <div className={ cx('todo', done ? 'todo_done' : '') }>
      <div className='todo-text'>{ title }</div>
      <div className='todo-buttons'>
            <button className='remove-button' onClick={ remove }>X</button>
            <input type='checkbox' className='custom_checkbox' checked={done} onChange={toggle}/>
      </div>
</div>
  )
}

export default observer(TodoItem);
