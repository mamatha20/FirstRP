import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";


export const ExpenseFilter = (props) => {
	const [filterText, setFilterText] = useState("");

	const [value, setValue] = useState(props.budget);



	
	const buttonClickHandler = () => {
		//do something to filter data
		let filteredExpenses = props.expenses.filter((ele) => {
			return ele.title.toLowerCase().includes(filterText.toLowerCase());
		});

		console.log("filtered result", filteredExpenses);
		props.onFilterEvent(filteredExpenses);
	};

	const showAlert = (ev) => {
		alert("filter by date clicked");
		console.log(ev);
	};

	return (
		<div
			style={{ display: "grid", gridTemplateColumns: "10% 30% 20% 20% 20%" }}
		>
			<span>Filter :</span>
			<InputText
				placeholder="Search Expense"
				onChange={(e) => setFilterText(e.target.value)}
			/>
			<div>
				<Button
					label="Filter"
					className="p-button-primary"
					onClick={buttonClickHandler}
				/>
			</div>
			<Button
				icon="pi pi-times"
				className="p-button-rounded p-button-danger p-button-text"
				onClick={() => props.clearFilterEvent()}
			/>
			<Button
				label="Date Filter"
				className="p-button-primary"
				onClick={showAlert}
			/>
 
     {/* //new code my  */}

			 <>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
			</>
		</div> 

	



	);
}; 
