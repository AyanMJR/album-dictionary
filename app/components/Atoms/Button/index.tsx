import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode
}

function Button({ children }: buttonProps) {
  return (
    <button>{children}</button>
  );
}

export default Button;