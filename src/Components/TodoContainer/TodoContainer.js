import React,{useContext} from 'react'
import styles from './TodoContainer.module.css'
import { GlobalContext } from '../../context'
const TodoContainer = ({children}) => {
    const store = useContext(GlobalContext)
    const {setModalIsOpen,modalIsOpen} = store
  return (
    <div className={styles.container}>
  
     
       <div>
        {children}
       </div>
     
    </div>
  )
}

export default TodoContainer
