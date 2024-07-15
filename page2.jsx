"use client";
import { usePathname } from "next/navigation";
export default function Post() {
  const pathname = usePathname(); //it access the path of dynamic route(url)
  return <p> {pathname}</p>; //it has the current url's pathname
}
