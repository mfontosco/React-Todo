import React, { useEffect, useState } from "react";
import Todolist from "./Components/TodoList/Todolist";

const GlobalContext = React.createContext();
const Provider = ({ children }) => {
  const [initialInput, setInitialInput] = useState("");
  const [todoList, setTodoList] = useState(
    localStorage.todoList ? JSON.parse(localStorage.todoList) : []
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [inputUpdate, setInputUpdate] = useState({
    id: "",
    text: "",
  });

  // useEffect(()=>{
  // let savedTodo = JSON.parse(localStorage.getItem('todoList'))
  // if(savedTodo){
  //     setTodoList(savedTodo)
  // }

  // },[])
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputUpdate({ ...inputUpdate, text: value });
  };
  const handleAdd = (e) => {
    e.preventDefault()
    if (initialInput !=="") {
      const dataList = {
        id: todoList.length,
        text: initialInput,
      };
      setTodoList([...todoList, dataList]);
      setModalIsOpen(false);
      setInitialInput("");
    }
  };
  const deleteList = (e, id) => {
    e.preventDefault();
    const copy = [...todoList];
    const item = copy.filter((item) => item.id !== id);
    console.log(item);
    setTodoList(item);
    setUpdateModalIsOpen(false)
    console.log("I'm clicked", id);
  };
  const updateHandler = (id) => {
    const copy = [...todoList];
    const item = copy.find((item) => item.id === id);
    setInputUpdate(item);
    setModalIsOpen(false)
    setUpdateModalIsOpen(true);
  };
  const updateCurrentHandler = (id) => {
    const copy = [...todoList];
    const itemIndex = copy.indexOf(copy.find((item) => item.id === id));
    const itemToBeUpdated = copy[itemIndex];
    itemToBeUpdated.text = inputUpdate.text;
    setUpdateModalIsOpen(false);
    setInputUpdate(copy);
  };
  console.log(todoList);
  const state = {
    updateCurrentHandler,
    inputUpdate,
    updateHandler,
    updateModalIsOpen,
    setUpdateModalIsOpen,
    changeHandler,
    deleteList,
    initialInput,
    setInitialInput,
    todoList,
    setTodoList,
    modalIsOpen,
    setModalIsOpen,
    handleAdd,
  };
  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
const consumer = GlobalContext.consumer;
export { Provider, consumer, GlobalContext };
