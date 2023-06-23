"use client";
import { Button, TextField } from "@/components/Input";
import Typography from "@/components/Typography";
import { UserContext } from "@/context";
import Image from "next/image";
import LoginLayout from "@/layouts/Login";
import HeaderLogo from "../../assets/images/headerlogo.svg";
import { Box } from "@mui/material";
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
    } else {
      alert("try again");
    }
  };

  return (
    <>
      {/* <h1>LOGIN PAGE</h1>
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
      </form> */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "3rem auto",
          flexDirection: "column",
          width: "400px",
          border: "1px solid #F2F2F2",
          padding: "2.5rem 2rem",
        }}
      >
        <Image src={HeaderLogo} alt={"header-logo"} />

        <Typography
          text={"Login to continue"}
          color={"#E62429"}
          variant="body2"
          sx={{ margin: "1rem 0", textTransform: "uppercase" }}
        />

        <TextField
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="Email"
          className="input-field email-input"
        />
        <TextField
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Password"
          className="input-field password-input"
        />
        <Button
          onClick={handleLogin}
          text={"continue"}
          className="btn-login"
          sx={{ marginTop: "10px" }}
        />
      </Box>
    </>
  );
}

export default LoginPage;
