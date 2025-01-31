"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useStateContext } from "../context/context";
import classNames from "classnames";
import Header from "./Header";

function DashboardWrapper({ children }: any) {
  const { openMenu, handleToggle, setOpenMenu } = useStateContext();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMemo(() => {
    windowSize.width <= 1000 ? setOpenMenu(false) : setOpenMenu(true);
  }, [windowSize]);

  return (
    <section
      className={classNames("", {
        "ml-[210px] p-5 w-[83%]": openMenu,
        "ml-0 p-2 w-full": !openMenu,
      })}
    >
      <Header />
      {children}
    </section>
  );
}

export default DashboardWrapper;
