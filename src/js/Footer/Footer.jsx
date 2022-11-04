import { useContext } from "react"
import { Link } from "react-router-dom"
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
						<Link to="/" className="selected" >All</Link>
					</li>
					<li>
						<Link to="/active">Active</Link>
					</li>
					<li>
						<Link to="/completed">Completed</Link>
					</li>
				</ul>
				<button className="clear-completed" onClick={handleClear}>Clear completed</button>
			</footer>
        )	
    }
export default Footer