import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <Log>
      <Logo>
        <img
          src="data:image/png;base64,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"
          alt="discord"
        />
      </Logo>
      <Button onClick={signIn}>Sign In</Button>
    </Log>
  );
}

const Log = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;

  Button {
    width: 300px;
    background-color: #738adb;
    color: #eff2f5;
    font-weight: 800;

    &:hover {
      background-color: black;
      color: #738adb;
    }
  }
`;
const Logo = styled.div`
  img {
    object-fit: contain;
    height: 150px;
  }
`;
export default Login;
