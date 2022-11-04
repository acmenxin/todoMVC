import { useState,useContext,useCallback } from "react"
import {TasksContext} from "./../App"
function Header (props){
	const [value,setValue] = useState('')
	const {state,dispatch} = useContext(TasksContext)
	const handleInput = useCallback((e)=>{
		setValue(e.target.value)
	},[value])
	const handleKeyDown =useCallback((e)=>{
		if(e.keyCode!==13){
			return
		}
		e.preventDefault()
		if(e.keyCode===13&&value!==''){
			dispatch({type:"submit",payload:value})}
			setValue('')
		},[value])
	return(
		 <header className="header">
				<h1>TodoMVC</h1>
				<input className="new-todo" placeholder="What needs to be done?" 
				autoFocus onChange={handleInput} value={value} onKeyDown={handleKeyDown}/>
	     </header>
		)
}
export default Header