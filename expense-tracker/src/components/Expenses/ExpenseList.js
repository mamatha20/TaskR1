import { ExpenseItem } from "./ExpenseItem";
import { Card } from "primereact/card";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter";

export const ExpenseList = (props) => {
	console.log("ExpenseList rendered with props", props);

	const handleEvent = (index) => {
		props.editHandler(index);
	};

	const filterHandler = (filteredExpenses) => {
		alert("filter expenses recieved" + JSON.stringify(filteredExpenses));
		props.filterEvent(filteredExpenses);
	};

	const clearFilterEvent = () => {
		props.clearFilterEvent();
	};
	return (
		<div style={{ margin: "10rem" }}>
			<ExpenseFilter
				clearFilterEvent={props.clearFilterEvent}
				expenses={props.expenses}
				onFilterEvent={filterHandler}
			/>
			<Card subTitle={props.title}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{props.expenses.map((expItem, idx) => {
						return (
							<ExpenseItem
								key={idx}
								expense={expItem}
								editHandler={() => handleEvent(idx)}
							/>
						);
					})}
				</div>
			</Card>
		</div>
	);
};