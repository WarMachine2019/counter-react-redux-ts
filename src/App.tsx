import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from 'redux';
import { actionsCreators, State } from './state';



function App() {

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionsCreators, dispatch);

  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <div className='NumberContainer'>
        <h1 className='Number'>{amount}</h1>
      </div>
      <button className="ButtonDeposit" onClick={() => depositMoney(100)}>Deposit</button>
      <button className="ButtonWithdraw" onClick={() => withdrawMoney(20)}>Withdraw</button>
      <button className="ButtonBankrupt" onClick={() => bankrupt()}>Bankrupt</button>

    </div >
  );
}

export default App;
