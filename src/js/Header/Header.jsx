import { useState,useContext } from "react"
import {TasksContext} from "./../App"
function Header (props){
	const [value,setValue] = useState('')
	const {state,dispatch} = useContext(TasksContext)
	const handleInput = (e)=>{
		setValue(e.target.value)
	}
	const handleKeyDown =(e)=>{
		if(e.code==="Enter"){
			dispatch({type:"submit",payload:value})}
		}
	return(
		 <header className="header">
				<h1>TodoMVC</h1>
				<input className="new-todo" placeholder="What needs to be done?" 
				autoFocus onChange={handleInput} value={value} onKeyDown={handleKeyDown}/>
	     </header>
		)
}
export default Header