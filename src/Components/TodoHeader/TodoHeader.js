import React from 'react'
import styles from './TodoHeader.module.css'
import {FaBars} from 'react-icons/fa'

const TodoHeader = () => {
  return (
    <div className={styles.container}>
    <FaBars className={styles.icon} size='2em'/>
      <h2>Website Todolist</h2>
    </div>
  )
}

export default TodoHeader
