import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const expensesArr = [
  {
    id: 'e1',
    title: 'Toilet Paper',
  },
  { id: 'e2', title: 'New TV' },
  {
    id: 'e3',
    title: 'Car Insurance',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesArr);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
