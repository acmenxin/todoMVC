import { useContext,createContext } from "react"
import TodoItem from "./TodoItem"
import {TasksContext} from "./../App"
export const TodoContext = createContext()
function TodoList(){
	const {state,dispatch} = useContext(TasksContext)
	return(
		<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete????????</label>
				<TodoContext.Provider value={{state,dispatch}}>
					<TodoItem />
				</TodoContext.Provider>
		</section>
	)
}
export default TodoList