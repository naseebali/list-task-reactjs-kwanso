import React from "react";

let TasksContextData = {
	tasks_list: [
		{
			_id: 1,
			title: "REST is Dying. Get Rid of It.",
			description:
				"To be fair, REST isn’t actually a data exchange protocol per se, like SOAP for instance....",
			image: "https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-portrait.jpg",
		},
		{
			_id: 1,
			title: "REST is Dying. Get Rid of It.",
			description:
				"To be fair, REST isn’t actually a data exchange protocol per se, like SOAP for instance....",
			image: "https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-portrait.jpg",
		},
	],
	add_task: () => {},
};

function reducer(state, action) {
	switch (action.type) {
		case "ADDTASK":
			return {
				...state,
				tasks_list: [...state.tasks_list, action.payload],
			};
		default:
			return state;
	}
}
//creat context
const ListContext = React.createContext(TasksContextData);

export { ListContext, TasksContextData, reducer };
