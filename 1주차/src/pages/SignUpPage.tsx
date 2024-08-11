import styled from "styled-components";
import fonts from "./../design-system/fonts/fonts";
import Colors from "../design-system/colors/Colors";
import { Input } from "../components/Inputs";
import { useState } from "react";

export const SignUpPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  return (
    <SignUpAll>
      <SignUpContents>
        <TitleAll>
          <SignUpTitle>회원가입</SignUpTitle>
          <TitleLine />
        </TitleAll>
        <IdPasswordAll>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            label="아이디"
            onChange={handleChangeId}
            value={id}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            label="비밀번호"
            password={password}
            setPassword={setPassword}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            label="비밀번호"
          />
        </IdPasswordAll>
        <SignUpBtn>회원가입</SignUpBtn>
      </SignUpContents>
      <LoginNavAll>
        <LoginNavQuestion>계정이 있으신가요?</LoginNavQuestion>
        <LoginNav>로그인</LoginNav>
      </LoginNavAll>
    </SignUpAll>
  );
};

const SignUpContents = styled.div`
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

const SignUpTitle = styled.h1`
  ${fonts.Headline2};
  font-weight: 600;
`;

const TitleLine = styled.hr`
  margin: 0px;
  width: 480px;
  border: 2px solid ${Colors.Primary};
`;

const SignUpAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

const SignUpBtn = styled.button`
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
