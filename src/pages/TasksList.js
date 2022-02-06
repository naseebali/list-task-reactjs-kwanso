import React, { useContext } from "react";
import { ListContext} from "../context/ListContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardImg = styled.img`
	min-width: 100%;
	max-height: 330px;
`;

const TaskList = () => {
	// const [reducerContextState, dispatchReducerContextState] = useReducer(
	// 	reducer,
	// 	TasksContextData
	// );
	const { contextState } = useContext(ListContext);
	return (
		<>
			<div className="container my-4">
				<div className="my-3 text-end">
					<Link to="/create-task">
						<button className="btn btn-link">Create Task</button>
					</Link>
				</div>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 gx-2 g-lg-2">
					{contextState.tasks_list.map((listElement, index) => {
						return (
							<div key={index} className="col">
								<div className="card" style={{ width: "100%" }}>
									<CardImg
										src={listElement.image}
										className="card-img-top"
										alt={`img-${index}`}
									/>
									<div className="card-body">
										<h5 className="card-title">
											{listElement.title}
										</h5>
										<p className="card-text">
											{listElement.description}
										</p>
										<button className="btn btn-primary">
											Go somewhere
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default TaskList;
