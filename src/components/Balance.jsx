const Balance = ({ balance }) => {
  return (
    <div className="child-container balance">
      <h2>Your Balance</h2>
      <p>${balance}</p>
    </div>
  );
};

export default Balance;
