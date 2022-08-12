const AddTransaction = ({
  transName,
  transNum,
  changeTransName,
  changeTransNum,
  transShow,
  transInfo,
}) => {
  const addTransaction = (e) => {
    e.preventDefault();
    if (transName === "" || transNum === "") {
      window.alert("Please fill the required fields");
    } else {
      transShow();
      transInfo({ transName, transNum });
    }
  };
  return (
    <form onSubmit={addTransaction} className="child-container add-transaction">
      <div>
        <h2>Add Transaction</h2>
      </div>
      <div>
        <label>Name Of Transaction</label>
        <input type="text" value={transName} onChange={changeTransName} />
      </div>
      <div>
        <label>Amount Of Transaction</label>
        <input type="number" value={transNum} onChange={changeTransNum} />
        <p>Don't forget to use [-] sign before expense amount.</p>
      </div>
      <button type="submit">Add Transaction!</button>
    </form>
  );
};

export default AddTransaction;
