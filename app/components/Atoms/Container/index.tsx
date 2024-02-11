import { ReactNode } from "react";

type containerProps = {
  children: ReactNode
}

function Container({ children }: containerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {children}
    </div>
  )
}

export default Container;