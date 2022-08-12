import { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import HistoryTrans from "./components/HistoryTrans";
import IncomeExpense from "./components/IncomeExpense";
function App() {
  const [transHistory, setTransHistory] = useState([]);
  const [balance, setBalance] = useState((0).toFixed(2));
  const [income, setIncome] = useState((0).toFixed(2));
  const [expense, setExpense] = useState((0).toFixed(2));
  const [transName, setTransName] = useState("");
  const [transNum, setTransNum] = useState("");
  //Show balance,Income,Expense
  const transShow = () => {
    setBalance(+balance + +transNum);
    +transNum > 0
      ? setIncome(+income + +transNum)
      : setExpense(+expense + +transNum);
    setTransName("");
    setTransNum("");
  };
  //Update History State
  const transInfo = (trans) => {
    const transId = Date.now();
    if (transNum > 0) {
      const transType = "income";
      const newTask = { transId, transType, ...trans };
      setTransHistory([newTask, ...transHistory]);
    } else {
      const transType = "expense";
      const newTask = { transId, transType, ...trans };
      setTransHistory([newTask, ...transHistory]);
    }
  };
  //Delete transaction from the history
  const deleteIt = (transId) => {
    setTransHistory(
      transHistory.filter((ele) => {
        return ele.transId !== transId;
      }),
      transHistory.forEach((ele) => {
        if (ele.transId === transId) {
          if (ele.transNum > balance) {
            setBalance(ele.transNum - balance);
          } else {
            setBalance(balance - ele.transNum);
          }
        }
      }),
      transHistory.forEach((ele) => {
        if (ele.transId === transId) {
          if (ele.transType === "income") {
            setIncome(income - ele.transNum);
          }
        }
      }),
      transHistory.forEach((ele) => {
        if (ele.transId === transId) {
          if (ele.transType === "expense") {
            setExpense(expense - ele.transNum);
          }
        }
      })
    );
  };
  return (
    <div className="container">
      <Header />
      <div>
        <div>
          <Balance balance={balance} />
          <IncomeExpense income={income} expense={expense} />
        </div>
        <div>
          <HistoryTrans transs={transHistory} deleteIt={deleteIt} />
          <AddTransaction
            transName={transName}
            transNum={transNum}
            changeTransName={(e) => setTransName(e.target.value)}
            changeTransNum={(e) => setTransNum(e.target.value)}
            transShow={transShow}
            transInfo={transInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
