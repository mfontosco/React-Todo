import React,{useContext} from 'react'
import styles from './InitialInput.module.css'
import { GlobalContext } from '../../context'
const InitialInput = () => {
    const store = useContext(GlobalContext)
    const {initialInput, setInitialInput,handleAdd} = store
  return (
    <div className={styles.container}>
      <form onSubmit={(e)=>handleAdd(e)}>
        <input
            type="text"
            name='initialInput'
            value={initialInput}
            onChange={(e)=>setInitialInput(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default InitialInput
