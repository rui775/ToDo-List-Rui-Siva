import React from "react";
import { useState } from "react";


const Home = () => {
	let [todo, setTodo] = useState('');
	let [todoList, setTodoList] = useState([]);

	return (
		<div>
			<div className="container text-center pt-3">
			<h1>My ToDo List</h1>
			</div>
			<div className="d-flex justify-content-center pt-3">
				<input 
					className="me-2"
					type="text"
					placeholder="Enter a task"
					value={todo}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
				/>
				<button onClick={() => {
					setTodoList([...todoList, todo]);
					setTodo('');
				}}>
					Add ToDo
				</button>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<ul className="pe-5">
					{todoList.length !== 0 && todoList.map((todoItem) => {
						return <li>{todoItem}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
