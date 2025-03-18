import { useState } from "react";

interface inputProps {
	onAdd: (description: string) => void;
}


export function ItemInput({onAdd}: inputProps) {
	const [description, setDescription] = useState("");

	return (		
		<div className="flex">
			<label className="input input-bordered flex items-center gap-2">
				<input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="grow" placeholder="Ajouter une tâche" />
			</label>

			<button className="btn btn-primary" onClick={() => onAdd(description)}>+</button>
		</div>
	);
}
