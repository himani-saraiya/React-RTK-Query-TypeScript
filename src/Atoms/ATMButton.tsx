import React from "react";

export type ButtonProps = {
  type?: "submit" | "reset" | "button",
  className: string,
  onClick: () => void;
};
const ATMButton: React.FC<ButtonProps> = ({ type, className, onClick }) => {
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        Button
      </button>
    </div>
  );
};

export default ATMButton;
