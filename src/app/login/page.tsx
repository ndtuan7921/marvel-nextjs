"use client";
import { UserContext } from "@/context";
import LoginLayout from "@/layouts/Login";
import { useRouter } from "next/navigation";
import React, { FormEvent, useContext, useState } from "react";

function LoginPage() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { email, password } = useContext(UserContext);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log(emailInput, "  ", passwordInput);
    if (emailInput === email && passwordInput === password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      router.push("/");
    }
  };

  return (
    <>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
