import React,{useContext} from 'react'
import styles from './Todolist.module.css'
import {BsTrash} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'
import {FaRegDotCircle} from 'react-icons/fa'
import { GlobalContext } from '../../context'

const Todolist = ({item,id}) => {
    const store =useContext(GlobalContext)
    const {deleteList,updateHandler}=store
  return (
    <div className={styles.container}>
      
     <div className={styles.li}>
     <FaRegDotCircle size='.8em' className={styles.dot}/>
      <li className={styles.list}><h3>{item}</h3></li>
     </div>
      <div className={styles.listIcons}>
      <FiEdit size='1.5em' className={styles.icon} onClick={(e)=>updateHandler(id)}/>
      <BsTrash size='1.5em' className={styles.icon} onClick={(e)=>deleteList(e,id)}/>
      </div>
    </div>
  )
}

export default Todolist
