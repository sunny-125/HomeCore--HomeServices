"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSession, useUser, useDescope } from "@descope/nextjs-sdk/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  const router = useRouter();

  const { isAuthenticated, isSessionLoading } = useSession();
  const { user } = useUser();
  const sdk = useDescope();

  const handleLogout = useCallback(() => {
    sdk.logout();
    router.refresh();
    router.push("/");
  }, [sdk, router]);

  if (isSessionLoading) return null;

  const userImage =
    user?.picture || user?.profilePicture || "/user.png";

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-8">
          <Link href="/">
          <Image src="/logo.svg" alt="logo" width={180} height={100} />
          </Link>

        <div className="md:flex items-center gap-6 hidden">
          <Link href="/">Home</Link>
          <a href="#popular-business">
            <h2 className="hover:scale-105 hover:text-primary cursor-pointer">
            Services
            </h2>
          </a>
          <Link href="/about">About Us</Link>
        </div>
      </div>

      <div>
        {!isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Login / Sign Up</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                Choose Login Type
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => router.push("/sign-in")}
              >
                User Login
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => router.push("/admin-login")}
              >
                Admin Login
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={userImage}
                alt="user"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {user?.name || user?.email}
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link href="/mybooking">My Booking</Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

export default Header;



