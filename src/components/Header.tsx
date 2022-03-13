import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../stores/TodoStoreContext';



const Header = () => {
  const store = useStore();
  const [title, setTitle] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e?.target?.value!==''){
      store?.setFilter(e?.target?.value)
    }else{
      store?.setFilter('')
    }
    setTitle(e?.target?.value || '')
    console.log('title'+title,'store'+store?.filter)
  }

  const handleClick = () => {
    store?.addTodo(title);
    setTitle('');
    store?.setFilter('')
    
    
  }

  return (
    <div>
      <h1>Add todo</h1>
      <div>
        <input type="text" value={ title } onChange={ handleInputChange }/>
        <button disabled={!title} onClick={ handleClick } >Add</button>
      </div>
    </div>
  )
}

export default observer(Header);
