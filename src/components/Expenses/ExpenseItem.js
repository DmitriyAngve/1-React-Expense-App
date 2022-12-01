import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
// import "./Expenses";

const ExpenseItem = (props) => {
  // useState(props.title); // always inside the component functions
  // useState always return an array with first element as variable (value) itself, and second element of an array is that updeting function

  //useState rigisters sime State, same value as a State for the component in which it is being called
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React"); // we will see it 4 times by the number of components

  const clickHandler = () => {
    // console.log("CLICKED!!!");
    setTitle("Updated!"); // this is state updeting function which allows use component function again!
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
