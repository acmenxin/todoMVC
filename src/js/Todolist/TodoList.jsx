import { useContext,createContext } from "react"
import TodoItem from "./TodoItem"
import {TasksContext} from "./../App"
export const TodoContext = createContext()
function TodoList(props){
	let {activeTodoCount} =props
	console.log(activeTodoCount,"active");
	const {state,dispatch} = useContext(TasksContext)
	const toggleAll=(e)=>{
		let isChecked = e.target.checked
		dispatch({type:'toggleAll',payload:isChecked})
	}
	return(
		<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} checked={activeTodoCount === 0} />
				<label htmlFor="toggle-all">Mark all as complete????????</label>
				<TodoContext.Provider value={{state,dispatch}}>
					<TodoItem />
				</TodoContext.Provider>
		</section>
	)
}
export default TodoList