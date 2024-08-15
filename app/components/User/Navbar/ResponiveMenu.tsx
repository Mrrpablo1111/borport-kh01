"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SocialIcon from "../../../../components/ui/social";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { NAV_LINKS } from ".";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/BorportDesktop.png";
import UserNav from "./UserNav";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage: string;
}

export default function ResponiveMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const [user, setUser] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("/api/user");
        if (response.ok) {
          const userData: Record<string, any> = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="forum-font">
      <div className="md:hidden cursor-pointer pl-24" onClick={handleNav}>
        <HiOutlineMenuAlt4 size={20} />
      </div>
      {/* Mobile menu dropdown*/}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div
          className="flex w-full items-center justify-end text-black"
          onClick={handleNav}
        >
          <AiOutlineClose size={25} />
        </div>
        {user && (
          <div className="flex items-center mb-4 gap-4">
            <Image
              src={user.profileImage}
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        )}
        <div>
          <ul className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in text-lg text-black "
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-center pt-10 items-center text-black gap-4">
          <SocialIcon text="BorPortCam" color="bg-blue-500">
            <FaFacebook size={25} />
          </SocialIcon>
          <SocialIcon
            text="/BorPortCam"
            color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
          >
            <FaInstagram size={25} />
          </SocialIcon>
          <SocialIcon text="Bor_Port_Cam" color="bg-black">
            <FaSquareXTwitter size={25} />
          </SocialIcon>
        </div>
        <div className=" flex justify-center items-center py-60">
          <Image src={Logo} alt="logo" width={220} height={220} />
        </div>
      </div>
    </div>
  );
}
