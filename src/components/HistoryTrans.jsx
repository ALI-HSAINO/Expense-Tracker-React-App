import SingleHistory from "./SingleHistory";

const HistoryTrans = ({ transs, deleteIt }) => {
  return (
    <div className="child-container history">
      <h2>Transactions History</h2>

      {transs.length > 0
        ? transs.map((ele) => (
            <SingleHistory
              key={ele.transId}
              transId={ele.transId}
              transType={ele.transType}
              transName={ele.transName}
              transNum={ele.transNum}
              deleteIt={deleteIt}
            />
          ))
        : "No transaction done yet"}
    </div>
  );
};

export default HistoryTrans;
