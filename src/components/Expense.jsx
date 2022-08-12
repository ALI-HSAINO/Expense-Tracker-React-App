const Expense = ({ expense }) => {
  return (
    <div className="child-container expense">
      <h3>Expense</h3>
      <p>${expense}</p>
    </div>
  );
};

export default Expense;
