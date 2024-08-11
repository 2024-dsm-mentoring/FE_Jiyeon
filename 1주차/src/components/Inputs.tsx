import styled from "styled-components";
import Colors from "../design-system/colors/Colors";
import fonts from "../design-system/fonts/fonts";
import { ChangeEvent, useState } from "react";
import { Eyes } from "../assets/Eyes";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  password?: string;
  setPassword?: (value: string) => void;
}

export const Input = ({
  label,
  placeholder,
  type,
  password,
  setPassword,
  ...props
}: InputProps) => {
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (setPassword) {
      setPassword(e.target.value);
    }
  };

  const [showPswd, setShowPswd] = useState<boolean>(false);

  if (type == "text") {
    return (
      <All>
        <Title>{label} </Title>
        <InputContainer
          placeholder={placeholder}
          type={type}
          {...props}
        ></InputContainer>
      </All>
    );
  } else {
    return (
      <All>
        <Title htmlFor={label}>{label} </Title>
        <InputFakeContainer>
          <InputContainer
            placeholder={placeholder}
            type={showPswd ? "text" : "password"}
            {...props}
            onChange={handleChangePassword}
            value={password}
          ></InputContainer>
          <PassWordEye onClick={() => setShowPswd(!showPswd)}>
            <Eyes isEye={showPswd} />
          </PassWordEye>
        </InputFakeContainer>
      </All>
    );
  }
};

const InputFakeContainer = styled.div`
  width: 482px;
  height: 46px;
  position: relative;
`;

const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 11px;
  width: 482px;
  height: 74px;
`;

const Title = styled.label`
  font: ${fonts.Body3};
  margin: 7px;
`;

const InputContainer = styled.input`
  color: ${Colors.Gray5};
  border-radius: 4px;
  width: 464px;
  padding: 10px 0 10px 16px;
  border: 1px solid ${Colors.Gray5};
  font: ${fonts.Body2};
  outline: none;
  background-color: ${Colors.Gray1};
`;

const PassWordEye = styled.button`
  border: none;
  position: absolute;
  top: 2px;
  right: 3px;
  background-color: transparent;

  &:focus {
    border: none;
    outline: none;
  }
`;
