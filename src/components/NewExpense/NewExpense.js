import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // notice that the parameter (enteredExpenseData) is the value of the data in exepnse form
  // such as title, amount, price
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData1 = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // child to parent component communication
    // parent(app), child(NewExpense)
    props.onAddExpense(expenseData1);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/*   here we create our own custom component */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
