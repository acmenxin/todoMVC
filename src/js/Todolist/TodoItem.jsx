import {useContext} from "react"
import {TodoContext} from "./TodoList"
function TodoItem(props){
	const {state,dispatch} = useContext(TodoContext)
	return(
		state.map((item,index)=>{
		return(
			<ul className="todo-list" key={index}>
			<li className={item.isCompleted===true?"completed":''} >
				<div className="view">
					<input className="toggle" type="checkbox" defaultChecked={item.isCompleted} 
					onChange={()=>{dispatch({type:"isCompleted",payload:index})}} />
					<label>{item.task}</label>
					<button className="destroy"></button>
				</div>
				<input className="edit"  />
			</li>
			</ul>
		)
	})		
)	
}
export default TodoItem