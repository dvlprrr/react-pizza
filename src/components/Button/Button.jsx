import React from "react";

function Button({ children, onClick }) {

  return (
    <button onClick={onClick} className="button button--cart">
      {children}
    </button>
  );
}

export default Button;
