import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthModal from "../../Modal/Auth";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const logInVariant = useColorModeValue("outline", "dark_outline");
  const signUpVariant = useColorModeValue("solid", "dark_solid");
  return (
    <>
      <Button
        variant={logInVariant}
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>
      <Button
        variant={signUpVariant}
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
