import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function UserNav() {
  const { getUser, isAuthenticated, getPermissions } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = await isAuthenticated();
  const permissions = await getPermissions();

  const isAdmin = permissions?.permissions.includes("admin") || false;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3 aria-hidden">
          <img
            src={
              user?.picture ??
              "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
            }
            alt="User"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
          <span className="hidden lg:block">
            {user ? `${user.given_name} ${user.family_name}` : "User"}
            {isAdmin && " (Admin)"}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px] forum-regular bg-white"
      >
        {isLoggedIn ? (
          <>
            <DropdownMenuItem>
              <Link href="/dashboard" className="w-full">
                Dashboard
              </Link>
            </DropdownMenuItem>
            {isAdmin && (
              <DropdownMenuItem>
                <Link href="/admin" className="w-full">
                  Admin Panel
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <Link href="/profile" className="w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutLink className="w-full">Log Out</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
