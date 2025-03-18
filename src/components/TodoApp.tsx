import { useState } from "react";
import { ItemInput } from "./ItemInput";
import { TodoItem } from "./TodoItem";

interface TodoItem {
	id: number;
	description: string;
	done: boolean;
}


export function TodoApp() {
	let items = [
		{ id: 1, description: "Acheter des oranges", done: false },
		{ id: 2, description: "Courir avec le fraté", done: true },
	];

	const [itemList, setItemList] = useState<TodoItem[]>(items);

	const sortedItemList = [...itemList].sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));

	const setDone = (id: number) => {
		setItemList(itemList.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
	};

	const deleteTask = (id: number) => {
		setItemList(itemList.filter((item) => item.id !== id));
	};

	const addTask = (description: string) => {
		setItemList([...itemList, { id: itemList[itemList.length - 1].id + 1, description, done: false }]);
	};


	return (
		<>
			<ItemInput onAdd={addTask}/>

			<div className="my-5 flex-column gap-5 w-full text-left">
				{sortedItemList.map((item) => (
					<TodoItem key={item.id} description={item.description} done={item.done} id={item.id} onSetDone={setDone} onDelete={deleteTask}/>
				))}
			</div>
		</>
	);
}
