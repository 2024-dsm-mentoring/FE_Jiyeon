import styled from "styled-components";
import Colors from "../../design-system/colors/Colors";
import fonts from "../../design-system/fonts/fonts";
import OpenEye from "../../assets/OpenEye.svg";
import CloseEye from "../../assets/CloseEye.svg";
import { useState } from "react";

export const Password = ({ password, setPassword }) => {
  const [showPswd, setShowPswd] = useState(false);

  const handleChandePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPswd = () => {
    setShowPswd((prevShowPswd) => !prevShowPswd);
  };

  return (
    <PasswordAll>
      <PasswordTitle>비밀번호</PasswordTitle>
      <PasswordContainer>
        <PasswordInput
          type={showPswd ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handleChandePassword}
          required
        />
        {/*required는 불리언 속성이며 불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false값을 가지게 된다. */}
        {/*showPswd일 때 text로 보여주고 아닐 때 password 형식으로 보여준다. value(보여주는 값)은 password를 받아온 값이고 이는 onChange를 통해 받아와진다.*/}
        <PassWordEye onClick={toggleShowPswd}>
          {showPswd ? (
            <img src={OpenEye} alt="show eye" />
          ) : (
            <img src={CloseEye} alt="close eye" />
          )}
        </PassWordEye>
      </PasswordContainer>
    </PasswordAll>
  );
};

const PassWordEye = styled.div`
  position: absolute;
  top: 13px;
  right: 12px;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 482px;
  height: 46px;
`;

const PasswordAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 11px;
`;

const PasswordTitle = styled.div`
  font: ${fonts.Body3};
  margin: 7px;
`;

const PasswordInput = styled.input`
  color: ${Colors.Gray5};
  border-radius: 4px;
  width: 464px;
  padding: 10px 0 10px 16px;
  border: 1px solid ${Colors.Gray5};
  font: ${fonts.Body2};
  outline: none;
  background-color: ${Colors.Gray1};
`;
