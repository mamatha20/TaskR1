import "./ExpenseItem.css";
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";

export const ExpenseItem = (props) => {
	//one way of implementing state individually
	// const [amount, setAmount] = useState(props.expense.amount);
	// const [title, setTile] = useState(props.expense.title);
	// const [expDate, setExpDate] = useState(props.expense.expDate);

	//another way in bulk
	const [expense, setExpense] = useState(props.expense);

	useEffect(() => {
		setExpense(props.expense);
	}, [props.expense]);
	//DO NOT CHANGE PROPS DIRECTLY EVEN IF ITS AN OBJECT
	// console.log(props.expense.amount);

	// setTimeout(() => {
	// 	//setAmount(amount + 500);
	// 	//spread operator which iterate over a given object and initialize the object
	// 	//setExpense({ ...expense, amount: 5000 });
	// 	setExpense((prevState) => ({
	// 		...prevState,
	// 		amount: 7000,
	// 	}));
	// }, 5000);

	let date = new Date(expense.expDate);
	let month = date.toLocaleDateString("default", { month: "short" });
	let day = date.toLocaleDateString("default", { day: "2-digit" });
	return (
		<div style={{ margin: "0.5rem", padding: "0.5rem" }}>
			<div className="expense">
				<div>
					<i className="pi pi-calendar"></i>
					<span>{day}</span>&nbsp;
					<strong>{month}</strong>
				</div>
				<div>{expense.title}</div>
				<div>{expense.category}</div>
				<div className="last-row">
					<span>&#8377; {expense.amount}</span>
					<Button
						icon="pi pi-times"
						className="p-button-rounded p-button-danger p-button-outlined"
					/>
					<Button
						onClick={props.editHandler}
						icon="pi pi-pencil"
						className="p-button-rounded p-button-success p-button-outlined"
					/>
				</div>
			</div>
		</div>
	);
};

