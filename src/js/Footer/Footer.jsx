import { useContext ,createContext} from "react"
import {TasksContext} from "./../App"
function Footer(props){
	const {state,dispatch} = useContext(TasksContext)
	// const {activeTodoCount} =props
	// console.log(activeTodoCount,"footer");
	// console.log(state.length,"stateFooter");
	// 已完成的对勾个数
	// var completedCount = state.length - activeTodoCount;
		  return(
            <footer className="footer">
				<span className="todo-count"><strong>0</strong> item left</span>
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
        )	
    }
export default Footer