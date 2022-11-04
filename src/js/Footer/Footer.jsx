import { useContext } from "react"
import { NavLink } from "react-router-dom"
import {TasksContext} from "./../App"
function Footer(props){
	const {state,dispatch} = useContext(TasksContext)
	const {activeTodoCount} =props
	// 已完成的对勾个数
	var completedCount = state.length - activeTodoCount;
	const handleClear=()=>{
		dispatch({type:"clearCompleted"})
	}
		return(
            <footer className="footer">
				<span className="todo-count"><strong>{completedCount}</strong> item left</span>
				<ul className="filters">
					<li>
						<NavLink to="/" >All</NavLink>
					</li>
					<li>
						<NavLink to="/active" activeClassName="selected" >Active</NavLink>
					</li>
					<li>
						<NavLink to="/completed" activeClassName="selected">Completed</NavLink>
					</li>
				</ul>
				<button className="clear-completed" onClick={handleClear}>Clear completed</button>
			</footer>
        )	
    }
export default Footer