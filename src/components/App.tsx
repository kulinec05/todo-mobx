import React from 'react';
import Header from './Header';
import Todos from './Todos';

const App = () => {

  return (
    <div className="container">
      <Header />
      <div className='todolist'>
              <Todos />
      </div>
    </div>
  );
};

export default App;
