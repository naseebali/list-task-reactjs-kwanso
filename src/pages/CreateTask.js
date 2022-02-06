import React from "react";
import { ListContext } from "../context/ListContext";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
	const navigate = useNavigate();
	const { contextDispatch } = React.useContext(ListContext);
	const [form, setForm] = React.useState({
		title: "",
		description: "",
		image: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			(form?.title && form.title !== "") ||
			(form?.description && form.description !== "") ||
			(form?.image && form.image !== "")
		) {
			contextDispatch({ type: "ADDTASK", payload: form });
			navigate("/");
		}
	};

	const handleInputChange = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		setForm((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	return (
		<div className="container">
			<div className="my-4">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="formInputTitle" className="form-label">
							Title
						</label>
						<input
							type="text"
							className="form-control"
							id="formInputTitle"
							placeholder="Title"
							value={form.title}
							onChange={handleInputChange}
							name="title"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formDesc" className="form-label">
							Description
						</label>
						<textarea
							className="form-control"
							id="formDesc"
							rows="3"
							name="description"
							value={form.description}
							onChange={handleInputChange}
						></textarea>
					</div>
					<div className="mb-3">
						<label htmlFor="formInputImgURL" className="form-label">
							Image URL
						</label>
						<input
							type="text"
							className="form-control"
							id="formInputImgURL"
							placeholder="image url"
							value={form.image}
							name="image"
							onChange={handleInputChange}
						/>
					</div>
					<div className="text-end">
						<button type="submit" className="btn btn-primary">
							Add Task
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateTask;
