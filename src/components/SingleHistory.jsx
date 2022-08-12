import { AiFillCloseSquare } from "react-icons/ai";
const SingleHistory = ({
  transId,
  transType,
  transName,
  transNum,
  deleteIt,
}) => {
  return (
    <div
      className={`child-container single-history ${
        transType === "income" ? "incom" : "expens"
      }`}
    >
      <AiFillCloseSquare
        size={30}
        className="delete-it"
        onClick={() => deleteIt(transId)}
      />
      <p className="name">{transName}</p>
      <p className="amount">${transNum}</p>
    </div>
  );
};

export default SingleHistory;
