import React from "react";

const SingleTrans = ({ transName, transNum, transId, transType }) => {
  return (
    <div
      transId={transId}
      transType={transType}
      className="child-container single-trans"
    >
      <p>{transName}</p>
      <p>{transNum}</p>
    </div>
  );
};

export default SingleTrans;
