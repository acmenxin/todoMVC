import { useReducer, createContext ,memo ,Suspense,lazy, useEffect, useCallback, useMemo, useState} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
const TodoList = lazy(()=>import ("./Todolist/TodoList"))
const MemoHeader = memo(Header)
const MemoFooter = memo(Footer)
//测试数据
// let initState = [
// 	{ task: "任务1", isCompleted: true },
// 	{ task: "任务2", isCompleted: true },
// ]
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
					return item.isCompleted = action.payload
				})
				return [...state]
			case "clearCompleted": //清除已完成
				return [...state.filter(item=>{return item.isCompleted===false})]
			case "deleteTask": //删除某一个task
				state.splice(action.payload,1)
				return [...state]
			default:
				return state;
		}
	}
export const TasksContext = createContext({})
function App(props) {
	const [stateAfter,setAfter] = useState(()=>{
		const saved = localStorage.getItem("state")
		return JSON.parse(saved)
	})
	const [state, dispatch] = useReducer(reducer, stateAfter)
	const activeTodoCount = state.reduce((accum, todo)=>{
		return todo.isCompleted ? accum : accum + 1;
	},0)
	//第一次挂载后立即获取缓存数据
	useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
	  }, [state]);  
	//   console.log(stateAfter,"stateAfter");
	return (
		<div className="App">
		{/**主体部分*/}
		<section className="todoapp">  
				<Suspense fallback={<h2>Loading..</h2>}>
				<TasksContext.Provider value={{ state, dispatch }}>
					<MemoHeader />	
					<BrowserRouter>
					  <Switch>
					     <Route path="/" component={TodoList} activeTodoCount={activeTodoCount} exact/>
					     <Route path="/active" component={TodoList} />
					     <Route path="/completed" component={TodoList} />
					  </Switch>
					<MemoFooter activeTodoCount={activeTodoCount} />
					</BrowserRouter>
				</TasksContext.Provider>
				</Suspense>
				
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