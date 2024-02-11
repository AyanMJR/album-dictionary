'use client'

import { Fragment } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HomeIcon from "@/app/assets/home.png";

function BreadCrumb() {
  const paths = usePathname();
  const pathsWithoutQuery = paths.split("?")[0];
  const pathNames = pathsWithoutQuery.split('/').filter(path => path);

  return (
    <div className="flex w-full mb-2">
      <ul className="flex">
        <li className="mr-2">
          <Link href="/">
            <span>
              <Image src={HomeIcon} alt="" width="25" height="25" />
            </span>
          </Link>
        </li>
        <span className="mx-2">/</span>
        {pathNames.map((path, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`
          return (
            <Fragment key={index}>
              <li className={clsx("mr-2", { ['text-blue-500']: pathsWithoutQuery !== href })}>
                <Link href={href}>{path}</Link>
              </li>
              <span className="mx-2">{pathNames.length !== index + 1 ? '/' : ''}</span>
            </Fragment>
          )})}
      </ul>
    </div>
  )
}

export default BreadCrumb;