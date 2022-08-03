import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TodoContainer from './Components/TodoContainer/TodoContainer';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import InitialInput from './Components/InitialInput/InitialInput';
import {useContext} from 'react'
import { GlobalContext } from './context';
import Todolist from './Components/TodoList/Todolist';
import InitialUpdate from './Components/InputUpdate/InitialUpdate';

function App() {
  const store = useContext(GlobalContext)
  const {modalIsOpen,todoList,updateModalIsOpen,setModalIsOpen}=store

  return (
    <div>
      <Header/>
     
      <div  className="App">
      <TodoHeader/>
      <TodoContainer>
{todoList && todoList.map((item)=> <Todolist key={item.id} id={item.id} item={item.text }/>)}
      </TodoContainer>
     {modalIsOpen ?<InitialInput/>:updateModalIsOpen ?<InitialUpdate /> : <div>
    <h2>ADD TODO</h2>
    <button className='btn' onClick={()=>setModalIsOpen(true)}>New Task</button>
    </div>}
      </div>
  
    </div>
  );
}

export default App;
