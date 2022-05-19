import React from "react";
import TodoItem from "./TodoItem";
import Heading from "./heading";
import Footer from "./Footer";

// pake map habisnya ul ada di stackoverflow kemaren malam cara makenya

const TodoList = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="todo-list">
					<Heading addNewItem={props.addNewItem} />
					<ul className="list-group list-group-flush">
						{props.items.map((item, i) => (
							<li className="list-group-item">
								<TodoItem item={item} key={i} />
							</li>
						))}
					</ul>
					<Footer items={props.items} />
				</div>
			</div>
		</div>
	);
};

export default TodoList;
