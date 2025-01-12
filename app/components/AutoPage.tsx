import React from "react";
import { NavLink } from "react-router";

type Props = {};

function AutoPage({}: Props) {
  return (
    <div className=" flex flex-col gap-10 items-center justify-center ">
      <h1>Auto</h1>
      <NavLink to={"/"}>Home</NavLink>
    </div>
  );
}

export default AutoPage;
