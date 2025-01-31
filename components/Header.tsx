"use client";
import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout } from "../redux/userSlice";
import { Toast } from "./Toast";
import { useRouter } from "next/navigation";
import { BackIcon2, Bell, MenuDot, Profile } from "@/icons/Social";
import { useStateContext } from "@/context/context";
import { User } from "@/typings";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const { openMenu, handleToggle, edit, setEdit, setEditData } =
    useStateContext();
  const [toggle, setToggle] = useState(false);
  const handleLogoutMenu = () => setToggle((prev) => !prev);
  const handleLogout = () => {
    dispatch(logout());
    Toast({ title: "User Logged Out", error: true });
    navigate.push("/");
  };
  const reset = () => {
    setEdit(false);
    navigate.push(`/dashboard/posts`);
    setEditData(null);
  };
  const user: User = useAppSelector((state) => state?.user?.user);
  return (
    <header className="sticky top-0 left-0 ">
      <nav className="flex items-center justify-between h-[60px] shadow-sm bg-white px-5">
        <span>
          {edit ? (
            <span
              onClick={reset}
              className="flex items-center space-x-2 text-[#A4A7B7] cursor-pointer"
            >
              <p>
                <BackIcon2 />
              </p>
              <p>Back</p>
            </span>
          ) : openMenu ? (
            <XMarkIcon
              onClick={handleToggle}
              className="size-6 font-semibold text-red-500 cursor-pointer"
            />
          ) : (
            <Bars3Icon
              onClick={handleToggle}
              className="h-6 w-6 text-[#000] cursor-pointer"
            />
          )}
        </span>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div>
            <Bell />
          </div>
          <span className="w-0.5 h-5 bg-[#E5E5E5]" />
          <div className="flex items-center space-x-4 sm:space-x-7 relative">
            <p className="">
              <Profile />
            </p>
            <p className="text-[#272727] font-medium cursor-pointer">
              {user?.email?.length > 20
                ? `${user?.email?.substring(0, 20)}...`
                : user?.email}
            </p>
            <p onClick={handleLogoutMenu} className="cursor-pointer">
              <MenuDot />
            </p>
            {toggle && (
              <div className="rounded shadow p-5 absolute top-10 bg-[#fefefe] -right-3 !z-[2000]">
                <p
                  onClick={handleLogout}
                  className="text-red-500 font-medium cursor-pointer flex"
                >
                  <ArrowLeftStartOnRectangleIcon className="size-6 ml-3" />
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
