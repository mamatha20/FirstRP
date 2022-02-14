import { useState } from "react";
import { AddExpense } from "./AddExpense/AddExpense";
import { ExpenseList } from "./ExpenseList/ExpenseList";

export function ExpenseMain() {
	const [expenses, setExpenses] = useState();
	const [expense, setExpense] = useState();

	const newExpAdded = (exp) => {
		setExpense(exp);
	};

	
	return (
		<div
			style={{
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<AddExpense newExpEvent={newExpAdded} />
			<ExpenseList onNewExpAdded={expense} />
		</div>
	);
}

