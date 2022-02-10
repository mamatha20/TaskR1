import React, { useEffect, useState } from "react";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import Form from "react-bootstrap/Form";
import { Calendar } from "primereact/calendar";
import { HideButton, ShowButton } from "./ClearButton";
export const ExpenseManager = (props) => {
	const [expense, setExpense] = useState(props.expense);
	const [buttonLabel, setButtonLabel] = useState("Add Expenses");

	useEffect(() => {
		setExpense(props.expense);
		props.expense === undefined
			? setButtonLabel("Add Expense")
			: setButtonLabel("Update Expense");
	}, [props.expense]);

	const categoryHandler = (ev) => {
		setExpense((prevState) => ({
			...prevState,
			category: ev.target.value,
		}));
	};

	const clickHandler = (ev) => {
		props.onExpCreated(expense);
		setExpense(undefined);
		//code to save to database
	};

	const cancelEventHandler = () => {
		setExpense(null);
	};

	const showHideButton = () => {
		return expense ? (
			<ShowButton cancelEventHandler={cancelEventHandler} />
		) : (
			<HideButton />
		);
	};

	return (
		<div className="card">
			<Fieldset legend="Add Income/Expenses" toggleable>
				<form className="p-fluid grid">
					<span className="p-float-label m-2">
						<InputText
							placeholder="Expense Title"
							value={expense?.title || ""}
							onChange={(e) =>
								setExpense((prevState) => ({
									...prevState,
									title: e.target.value,
								}))
							}
						/>
					</span>
					<div className="p-inputgroup">
						<Calendar
							id="icon"
							placeholder="Exp Date"
							value={expense?.expDate || ""}
							dateFormat="dd/mm/yy"
							showIcon
							onChange={(e) =>
								setExpense((prevState) => ({
									...prevState,
									expDate: e.target.value,
								}))
							}
						/>
					</div>
					<Form.Select
						aria-label="Expenses"
						value={expense?.category}
						onChange={categoryHandler}
					>
						<option value="HouseHold Exp">Household Exp</option>
						<option value="Entertainment Exp">Entertainment Exp</option>
						<option value="Travelling Exp">Travelling Exp</option>
						<option value="Child's Exp">Child's Exp</option>
						<option value="Insurance Exp">Insurance Exp</option>
						<option value="Misc Exp">Misc Exp</option>
					</Form.Select>
					<span className="p-float-label m-2">
						<InputNumber
							value={expense?.amount}
							mode="currency"
							currency="INR"
							currencyDisplay="code"
							locale="en-IN"
							onChange={(e) =>
								setExpense((prevState) => ({
									...prevState,
									amount: e.value,
								}))
							}
						/>
					</span>
				</form>
				<Button
					label={buttonLabel}
					onClick={clickHandler}
					className="p-button-danger"
				/>
				{showHideButton()}
			</Fieldset>
		</div>
	);
};