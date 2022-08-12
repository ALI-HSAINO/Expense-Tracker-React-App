import React from "react";
import Expense from "./Expense";
import Income from "./Income";

const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="child-container income-expense">
      <Income income={income} />
      <Expense expense={expense} />
    </div>
  );
};

export default IncomeExpense;
