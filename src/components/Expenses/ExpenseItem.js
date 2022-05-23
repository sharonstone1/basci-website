import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React from "react";
import "./ExpenseItem.css";

// when we want to pass data from another component
// we use props in the component in which we want to share data with .

// when we want to retrieve data, we call props with the name of the value that
// we want to retrieve from another component in which the data are store.

// this component is called DOM  or presentation component because it does not have
// any internal state
function ExpenseItem(props) {
  // The toISOString() method returns a string
  // in simplified extended ISO format (ISO 8601),
  // which is always 24 or 27 characters long
  // (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively).
  // the method has two parameters, the first one is the language, the second the configuration.

  // react hook must be called inside the function component.
  // useState return an array destructuring where the first varibale is the value of the data
  // and the second variable is the update data.

  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("hello paper");
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate dateE={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>change title</button> */}
    </Card>
  );
}

export default ExpenseItem;
