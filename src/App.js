import { useReducer } from "react";
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import TasksList from "./pages/TasksList";
import CreateTask from "./pages/CreateTask";
import { ListContext, TasksContextData, reducer } from "./context/ListContext";

function App() {
	const [contextState, contextDispatch] = useReducer(reducer, TasksContextData);
	return (
		<div className="App">
			<ListContext.Provider value={{contextState,contextDispatch}}>
				<Layout>
					<Routes>
						<Route path="/" element={<TasksList />} />
						<Route path="/create-task" element={<CreateTask />} />
					</Routes>
				</Layout>
			</ListContext.Provider>
		</div>
	);
}

export default App;
