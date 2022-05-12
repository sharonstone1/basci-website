import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// when we want to pass data from another component
// we use props in the component in which we want to share data with .

// when we want to retrieve data, we call props with the name of the value that
// we want to retrieve from another component in which the data are store.

function ExpenseItem(props) {
  // The toISOString() method returns a string
  // in simplified extended ISO format (ISO 8601),
  // which is always 24 or 27 characters long
  // (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively).
  // the method has two parameters, the first one is the language, the second the configuration.

  return (
    <Card className="expense-item">
      <ExpenseDate dateE={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
