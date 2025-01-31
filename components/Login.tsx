"use client";
import React from "react";
import Card from "./Card";
import Input from "./Input";
import { useLoginQuery } from "@/hooks/useLoginQuery";
import Button from "./Button";

export default function Login() {
  const {
    handleSubmit,
    errors,
    values,
    handleBlur,
    handleChange,
    isSubmitting,
  } = useLoginQuery();
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2">
      <Card>
        <section className="p-5 space-y-6 sm:p-10 w-full">
          <div className="space-y-1">
            <h2 className="text-[#434854] text-2xl font-semibold">Login</h2>
            <p className="text-[#737373] text-sm">
              Kindly enter your details to log in
            </p>
          </div>
          <form className="space-y-4 w-full">
            <Input
              label="Email Address"
              placeholder="john@doe.com"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email ? (
              <b className="text-xs text-red-500">{errors.email}</b>
            ) : null}
            <Input
              label="Password"
              placeholder="********"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password ? (
              <b className="text-xs text-red-500">{errors.password}</b>
            ) : null}
            <Button
              loading={isSubmitting}
              label="Login"
              onClick={handleSubmit}
              styles="bg-[#0A74DC]  w-full"
            />
            <p className="text-sm text-[#0A74DC] text-center cursor-pointer">
              Forgot your password?
            </p>
            <div className="space-x-1 justify-center flex items-center cursor-pointer">
              <p className="text-[#B0B9C8] text-xs underline">Privacy Policy</p>
              <p className="text-xs text-[#bac2cf]">and</p>
              <p className="text-[#B0B9C8] text-xs underline">
                {" "}
                Terms of services
              </p>
            </div>
          </form>
        </section>
      </Card>
    </div>
  );
}
