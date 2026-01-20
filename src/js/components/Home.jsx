import react, { useState } from "react";




//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat([inputValue]));
							setInputValue("");
						}
					}}
					placeholder="What do you need to do?"
				/>
				{todos.map((item, index) => (
					<li>
						{item}{""}
						<i
							className="fa-solid fa-trash"
							onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}
						></i>
					</li>
				))}
				<li>{todos.length} tasks</li>
			</ul>
		</div>
	);
};

export default Home;