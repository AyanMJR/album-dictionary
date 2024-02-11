import { ReactNode } from "react";
import BreadCrumb from "@/app/components/Atoms/BreadCrumb";

type layoutProps = {
  children: ReactNode
}

function Layout({ children }: layoutProps) {
  return (
    <>
      <BreadCrumb />
      {children}
    </>
  )
}

export default Layout;