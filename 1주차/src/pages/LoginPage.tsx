import styled from "styled-components";
import fonts from "./../design-system/fonts/fonts";
import Colors from "../design-system/colors/Colors";
// import { Id } from "../components/IdPassword/Id";
// import { Password } from "../components/IdPassword/Password";
<<<<<<< Updated upstream
import { useState } from "react";

import { Input } from "../components/Inputs";

export const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

=======
<<<<<<< Updated upstream
import { Input } from "../components/Inputs";

export const LoginPage = () => {
=======
import { SetStateAction, useState } from "react";

import { Input } from "../components/Inputs";

export const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e: { target: { value: SetStateAction<string> } }) => {
    setId(e.target.value);
  };

>>>>>>> Stashed changes
>>>>>>> Stashed changes
  return (
    <LoginAll>
      <LoginContents>
        <TitleAll>
          <LoginTitle>로그인</LoginTitle>
          <TitleLine />
        </TitleAll>
        <IdPasswordAll>
          <Input
            type="text"
            label="아이디"
            placeholder="아이디를 입력해주세요."
            onChange={handleChangeId}
            value={id}
          />
          <Input
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            password={password}
            setPassword={setPassword}
          />
        </IdPasswordAll>
        <LoginBtn>로그인</LoginBtn>
      </LoginContents>
      <LoginNavAll>
        <LoginNavQuestion>계정이 있으신가요?</LoginNavQuestion>
        <LoginNav>로그인</LoginNav>
      </LoginNavAll>
    </LoginAll>
  );
};

const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const IdPasswordAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TitleAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 23px;
`;

const LoginTitle = styled.h1`
  ${fonts.Headline2};
  font-weight: 600;
`;

const TitleLine = styled.hr`
  margin: 0px;
  width: 480px;
  border: 2px solid ${Colors.Primary};
`;

const LoginAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

const LoginBtn = styled.button`
  border: none;
  opacity: 50%;
  background-color: ${Colors.Primary};
  color: ${Colors.Gray1};
  display: flex;
  justify-content: center;
  align-items: center;
  ${fonts.Button};
  width: 480px;
  height: 50px;
  outline: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

const LoginNavAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const LoginNavQuestion = styled.div`
  color: ${Colors.Gray6};
  ${fonts.Body2};
`;

const LoginNav = styled.div`
  color: ${Colors.Primary};
  ${fonts.Body2};
  font-weight: 600 !important;
  cursor: pointer;
`;
