import {useContext} from "react"
import {TodoContext} from "./TodoList"
function TodoItem(props){
	const {matchUrl} = props
	const {state,dispatch} = useContext(TodoContext)
	if(matchUrl==="/"){
		return(
			state.map((item,index)=>{
			return(
				<ul className="todo-list" key={index}>
				<li className={item.isCompleted===true?"completed":''} >
					<div className="view">
						<input className="toggle" type="checkbox" checked={item.isCompleted} 
						onChange={()=>{dispatch({type:"isCompleted",payload:index})}} />
						<label>{item.task}</label>
						<button className="destroy" onClick={()=>dispatch({type:"deleteTask",payload:index})}></button>
					</div>
					<input className="edit"  />
				</li>
				</ul>
			)
		})		
	)	
}
else{
	let linkCompleted=matchUrl==="/active"?false:true
		return(
		state.map((item,index)=>{
			if(item.isCompleted===linkCompleted){
				return(
					<ul className="todo-list" key={index}>
					<li className={item.isCompleted===true?"completed":''} >
						<div className="view">
							<input className="toggle" type="checkbox" checked={item.isCompleted} 
							onChange={()=>{dispatch({type:"isCompleted",payload:index})}} />
							<label>{item.task}</label>
							<button className="destroy" onClick={()=>dispatch({type:"deleteTask",payload:index})}></button>
						</div>
						<input className="edit"  />
					</li>
					</ul>
				)
			}
	})		
)	
}
}
export default TodoItem