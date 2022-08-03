import React,{useContext} from 'react'
import { GlobalContext } from '../../context'
import styles from './InputUpdate.module.css'

const InitialUpdate = () => {
    const store =useContext(GlobalContext)
    const {changeHandler,updateCurrentHandler,inputUpdate} =store
  return (
    <div className={styles.container}>
      <form onSubmit={()=>updateCurrentHandler(inputUpdate.id)}>
        <input
            type="text"
            name='inputUpdate'
            value={inputUpdate.text}
            onChange={(e)=>changeHandler(e)}
        />
        <button type='submit'>update</button>
      </form>
    </div>
  )
}

export default InitialUpdate
