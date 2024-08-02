import styled from "styled-components";
import Colors from "../../design-system/colors/Colors";
import fonts from "../../design-system/fonts/fonts";

export const Password = () => {
  return (
    <PasswordAll>
      <PasswordTitle>비밀번호</PasswordTitle>
      <PasswordInput type="password" placeholder="비밀번호를 입력해주세요." />
    </PasswordAll>
  );
};

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
  border-radius: 4px;
  width: 464px;
  padding: 10px 0 10px 16px;
  border: 1px solid ${Colors.Gray5};
  font: ${fonts.Body2};
  outline: none;
  background-color: ${Colors.Gray1};
`;
