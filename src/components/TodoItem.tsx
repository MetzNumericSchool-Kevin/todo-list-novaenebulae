interface TodoItemProps {
	id: number;
	description: string;
	done: boolean;
	onSetDone: (id: number) => void;
	onDelete: (id: number) => void;
}

export function TodoItem({description, done, id, onSetDone, onDelete}: TodoItemProps) {
	return (
		<>
			<div className={!done ? "bg-indigo-700 w-full m-5 rounded-box p-3 flex" : "bg-indigo-900 w-full m-5 rounded-box p-3 flex"}>
				<span className="pr-8">
					<input type="checkbox" checked={done} className="checkbox" onChange={() => onSetDone(id)} />
				</span>
				<span className={!done ? "flex-grow text-white" : "flex-grow line-through"}>{description}</span>
				<div>
					<button className="btn btn-error btn-outline btn-xs" onClick={() => onDelete(id)}>X</button>
				</div>
			</div>
		</>
	);
}
