import React from "react";
import "./style.css";

export const BtnLoader = ({ handlerLoading, children }) => {
  return (
    <div className="btn btn-loading">
      <button onClick={handlerLoading}>{children}</button>
    </div>
  );
}