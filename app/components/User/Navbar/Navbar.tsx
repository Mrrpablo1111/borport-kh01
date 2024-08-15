import Link from "next/link";
import React from "react";
import DesktopLogo from "../../../../public/BorportDesktop.png";
import MoblieLogo from "../../../../public/BorportMobile.png";
import Image from "next/image";
import UserNav from "./UserNav";
import { BsPerson } from "react-icons/bs";
import { NAV_LINKS } from "./index";
import ResponiveMenu from "./ResponiveMenu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Navbar() {
  


  return (
    <nav className="flex items-center justify-between max-container px-12 z-30 py-2 shadow-xl bg-white  ring-1 ring-slate-100 fixed w-[100%] left-[50%]  translate-x-[-50%] forum-font text-xl">
      <Link href="/">
        
        <Image
          src={DesktopLogo}
          alt="Desktop Logo"
          className="h-auto w-44 hidden lg:block"
        />
        <Image
          src={MoblieLogo}
          alt="Mobile Logo"
          className="w-24 block lg:hidden"
        />
      </Link>
      <ul className="md:flex h-full hidden">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex mx-8 gap-2 relative"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="">
        <UserNav />
      </div>
      <ResponiveMenu />
    </nav>
  );
}
