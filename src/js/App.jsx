import { useReducer, createContext } from "react";
import TodoList from "./Todolist/TodoList.jsx"
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
let initState = [
	{ task: "任务1", isCompleted: true },
	{ task: "任务2", isCompleted: true },
]
function reducer(state, action) {
		switch (action.type) {
			case "submit": //回车提交
				return [...state,{task:action.payload,isCompleted:false}]
			case "isCompleted": //控制对勾
				state.map((item,index)=>{
					if(index===action.payload){
						return [...state][index].isCompleted = ![...state][index].isCompleted
					}
				})
				return [...state]
			case "toggleAll": //全选反选按钮
				state.map((item)=>{
					return item.isCompleted=action.payload
				})
				return [...state]
			default:
				return state;
		}
	}
export const TasksContext = createContext({})
function App() {
	const [state, dispatch] = useReducer(reducer, initState)
	let activeTodoCount = state.reduce(function (accum, todo) {
		return todo.isCompleted ? accum : accum + 1;
	}, 0);
	return (
		<div className="App">
		{/**主体部分*/}
			<section className="todoapp">
				<TasksContext.Provider value={{ state, dispatch }}>
					<Header />
					<TodoList props={activeTodoCount}/>
					<Footer />
				</TasksContext.Provider>
			</section>
		{/**尾部 */}
			<footer className="info">
				<p>Double-click to edit a todo</p>
				<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
				<p>Created by <a href="http://todomvc.com">you</a></p>
				<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
			</footer>
		</div>
	)
}
export default App;
