import React from 'react';
import { useState } from 'react';
import './App.css';
import bgImgDesktopLight from './bg-desktop-light.jpg';
import moon from './icon-moon.svg';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText('');
    console.log(todos);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={bgImgDesktopLight} alt="A mountain with a gradient color filter"  className='background__light'/>
        <section className="application__row">
          <div className="header__content">
          <p className='todo__text'>TODO</p>
          <img src={moon} alt="a white moon" className='todo__moon' />
          </div>
          <label htmlFor="todo__action"></label>
              <input type="text" id="todo__action" name="todo__action" className='todo__action' required
              minLength="2"  size="10" placeholder='Create a new todo...'  
              onChange={(e) => setText(e.target.value) }
              onClick={addTodo}
              ></input>
              <div className="tasks__list">
                <div className="task__header">
                  <div className="task__wrapper">
                    <ul className="task__list">
                      <li className="task__item"> Tasks list is empty !</li>
                      <li className="task__item last__task"> <p className='items'><span className='items__number'>0</span> item left</p>  
                      <div className="centered__options">
                      <p className='all firstCenter'>All</p> 
                      <p className='active'>Active</p> 
                      <p className='completed'>Completed</p>
                      </div> 
                        <p className='clearCompleted'>Clear Completed</p></li>
                    </ul>
                  </div>
                </div>
              </div>
        </section>
      </header>
    </div>
  );
}

export default App;
