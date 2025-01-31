"use client";
import React, { useState } from "react";
import { EyeIcons, EyeSlash } from "@/icons/Social";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: JSX.Element;
  iconFunc?: () => void;
}

export default function Input({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  icon,
  iconFunc,max,maxLength
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="login font-semibold capitalize flex flex-col w-full">
      <label htmlFor={label} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        max={max}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`p-2 outline-none rounded ${
          value
            ? "border-2 border-[#0A74DC] bg-[#EDF6FF]"
            : "border-[1px] border-[#A4A7B7] text-sm"
        }`}
      />
      {type === "password" && !icon && (
        <div
          className="relative -top-7 cursor-pointer w-10 left-[90%]"
          onClick={handleShowPassword}
        >
          {showPassword ? <EyeIcons /> : <EyeSlash />}
        </div>
      )}
    </div>
  );
}
