import Image from "next/image";
import { ReactNode } from "react";

type tilesProps = {
  children: ReactNode,
  icon: string | HTMLImageElement
}

function Tiles({ children, icon }: tilesProps) {
  return (
    <div className="min-h-14 h-full my-1 mr-2 p-2 border-2 border-black text-center">
      <div className="flex justify-center">
        <Image src={icon} alt="logo" width={150} height={150} />
      </div>
      {children}
    </div>
  )
}

export default Tiles;