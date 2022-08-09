import React from "react";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  props: any;
};

function Button({ label, props, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} property={props}>
      {label}
    </button>
  );
}
export default Button;
