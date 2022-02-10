import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";




import {
  ELS,
  InvestmentView,
  MutualFund,
  NPS,
} from "./components/Investment/InvestmentUI";
import { FinanceView } from "./components/FinancePlanner/FinancePlanner";


import "./App.css";
// import {
// 	Investment,
// 	INVESTMENT_CATEGORY,
// 	INVESTMENT_FREQUENCY,
// 	INVESTMENT_TYPE,
// } from "./models/Investment.model";
import { Expense, TRANSACTION_TYPE } from "./models/Expense.model";
// import { ExpenseManager } from "./components/Manager/ExpenseManager";
import { ExpenseList } from "./components/Expenses/ExpenseList";
import { ProfileForm } from "./components/Profile/ProfileForm";
import { Login } from "./components/Auth/Login/Login";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Switch } from "react-router-dom";
import { ChildPlan } from "./components/FinancePlanner/ChildPlan";
import { RetirementPlan } from "./components/FinancePlanner/RetirementPlan";
import { FuturePlan } from "./components/FinancePlanner/FuturePlan";

function App() {
  let expenseArr = [
    new Expense(
      "Pizza for samaya",
      new Date("2022,2,2"),
      "chandan",
      "Child's Exp",
      499,
    ),
    new Expense(
      "Car Loan ",
      new Date("2022,2,5"),
      "chandan",
      "Travelling Exp",
      13400,
    ),
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [expense, setExpense] = useState();
  const [filteredExpenses, setFilteredExpenses] = useState(expenseArr);
  const [expenses, setExpenses] = useState(expenseArr);

  const onExpenseAdded = (value) => {
    //check if the item exists inside the array

    let idx = expenses.findIndex((item) => {
      return item.title == value.title && item.amount == value.amount
        ? true
        : false;
    });

    if (idx !== -1) {
      //item already exists in the expenses array
      return;
    }
    //1- create a copy of state array
    const expensesCopy = expenses.slice();
    //2- create a new element inside the cloned copy
    let newExp = new Expense(
      value.title,
      value.expDate,
      value.createdBy,
      value.category,
      value.amount,
    );
    expensesCopy.push(newExp);
    //3 - useState to update new State
    setExpenses(expensesCopy);
    //we need to do expenses.push(newExp); //but this is going to mutate expenses
    //setExpenses(expenses.push(newExp)) //Not work cause we are mutating array
    //setExpenses((prevState)=>expenses.map(comparer logic and function))//will not work cause of overhead
  };

  const onEditEventRecieved = (value) => {
    setExpense(expenses[value]);
  };

  const onFilteredEvent = (filteredExp) => {
    const tmpFilteredExpenseCopy = filteredExp;
    setFilteredExpenses(tmpFilteredExpenseCopy);
    debugger;
  };

  const clearFilterEvent = () => {
    alert("event recieved from expenseList");
    setFilteredExpenses(expenses);
  }

  return (
    

    
		<BrowserRouter>
			<Header />



      

			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="expense" element={<ExpenseList expenses={[]} />} />
				<Route path="investment" element={<InvestmentView />} />
				<Route path="finance" element={<FinanceView />}>
					<Route path="childplan" element={<ChildPlan />} />
					<Route path="retirementplan" element={<RetirementPlan />} />
					<Route path="futureplan" element={<FuturePlan />} />
				</Route>
				<Route path="profile" element={<ProfileForm />} />
			</Routes>
		</BrowserRouter>

  );
}

export default App;
