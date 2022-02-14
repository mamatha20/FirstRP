import { useState, useContext } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";

import axios from "axios";
import { apiUrl } from "../../app.config";
import "./AddExpense.css";
import { UserContext } from "../../App";

export const AddExpense = (props) => {
	const user = useContext(UserContext);

	const recurringType = [
		"daily",
		"weekly",
		"monthly",
		"quarterly",
		"half-yearly",
		"yearly",
	];

	const expCategories = [
		"Household",
		"Travel",
		"EMIs and Loan",
		"Food",
		"Insurances",
		"Donation",
		"Child's",
		"Medical",
	];
	const expObj = {
		title: "",
		amount: 0,
		category: "",
		expDate: "",
		isRecurring: false,
		recurringOn: "",
	};
	
	const [expense, setExpense] = useState( expObj);
	


	const addHandler = (ev) => {
		ev.preventDefault();
		alert(JSON.stringify(expense));
		console.log(expense);
		if (user) {
			axios
				.post(apiUrl + "expense/add", {
					createdBy: user._id,
					title: expense.title,
					amount: expense.amount,
					category: expense.category,
					expDate: expense.expDate,
					isRecurring: expense.isRecurring,
					recurringOn: expense.recurringOn || null,
				})
				.then((r) => {
					if (r.status === 200) {
						props.newExpEvent(expense);
						alert("expenses saved successfully");
					} else {
						alert("failed to save expense");
					}
				});
		} else {
			alert("please login first to save your expenses");
		}
	};
	return (
		<div className="card">
			<Card>
				<form className="p-fluid grid formgrid">
					<div className="field col-6 ">
						<div className="p-inputgroup">
							<span className="p-inputgroup-addon">
								<i className="pi pi-bookmark"></i>
							</span>
							<span className="p-float-label">
								<InputText
									id="inputgroup"
									type="text"
									// value={expense.title}
									onChange={(e) =>
										setExpense({
											...expense,
											title: e.target.value,
										})
									}
								/>
								<label htmlFor="inputgroup">Expense Name</label>
							</span>
						</div>
						{expense.title.length <= 0 ? (
							<div style={{ color: "red", fontSize: "small" }}>
								Expense name Cannot be left blank
							</div>
						) : null}
					</div>
					<div className="field col-6">
						<div className="p-inputgroup">
							<span className="p-inputgroup-addon">
								<i className="pi pi-money-bill"></i>
							</span>
							<span className="p-float-label">
								<InputText
									id="inputgroup"
									type="text"
									value={expense.amount}
									onChange={(e) =>
										setExpense({
											...expense,
											amount: e.target.value,
										})
									}
								/>
								<label htmlFor="inputgroup">Amount</label>
							</span>
						</div>
						{expense.amount <= 0 ? (
							<div style={{ color: "red", fontSize: "small" }}>
								Expense Date Cannot be empty
							</div>
						) : null}
					</div>

					<div className="field col-6">
						<div className="p-inputgroup">
							<span className="p-inputgroup-addon">
								<i className="pi pi-chart-pie"></i>
							</span>
							<span className="p-float-label">
								<Dropdown
									value={expense.category}
									options={expCategories}
									onChange={(e) =>
										setExpense({ ...expense, category: e.value })
									}
									placeholder="Select Expense category"
								/>
							</span>
						</div>
					</div>

					<div className="field col-6">
						<div className="p-inputgroup">
							<span className="p-float-label">
								<Calendar
									id="icon"
									value={expense.expDate}
									onChange={(e) => setExpense({ ...expense, expDate: e.value })}
									showIcon
								/>

								<label htmlFor="inputgroup">Expense Date</label>
							</span>
						</div>
						{expense.expDate.length <= 0 ? (
							<div style={{ color: "red", fontSize: "small" }}>
								Expense Date cannot be left blank
							</div>
						) : null}
					</div>

					<div className="field col-6">
						<div className="p-inputgroup">
							<span className="p-label">
								<Checkbox
									onChange={(e) => {
										setExpense({ ...expense, isRecurring: e.checked });
									}}
									checked={expense.isRecurring}
								></Checkbox>
								<label htmlFor="inputgroup">
									&nbsp;&nbsp;Is Recurring Expenses?
								</label>
							</span>
						</div>
					</div>

					<div className="field col-6">
						{expense.isRecurring ? (
							<div className="p-inputgroup">
								<span className="p-inputgroup-addon">
									<i className="pi pi-calendar-plus"></i>
								</span>
								<span className="p-float-label">
									<Dropdown
										value={expense.recurringOn}
										options={recurringType}
										onChange={(e) =>
											setExpense({ ...expense, recurringOn: e.value })
										}
										placeholder="Select Recurring Type"
									/>
								</span>
							</div>
						) : null}
					</div>

					<div className="field">
						<Button label="Add Expenses" iconPos="right" onClick={addHandler} />
					</div>
				</form>
				<div>
					Save
				</div>
			</Card>
		</div>
	);
};