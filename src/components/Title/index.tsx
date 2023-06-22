"use client";
import { UserContext } from "@/context";
import React, { useContext } from "react";

function Title() {
  const { email, password } = useContext(UserContext);
  return <div>User email: {email}</div>;
}

export default Title;
