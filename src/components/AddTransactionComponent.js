import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransactionComponent = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const changeText = (e) => {
    setText(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={changeText}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={changeAmount}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
