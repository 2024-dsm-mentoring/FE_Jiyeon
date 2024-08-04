import styled from "styled-components";
import Colors from "../../design-system/colors/Colors";
import fonts from "../../design-system/fonts/fonts";

export const Id = () => {
  return (
    <IdAll>
      <IdTitle>아이디</IdTitle>
      <IdInput type="text" placeholder="아이디를 입력해주세요." />
    </IdAll>
  );
};

const IdAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 11px;
`;

const IdTitle = styled.div`
  font: ${fonts.Body3};
  margin: 7px;
`;

const IdInput = styled.input`
  color: ${Colors.Gray5};
  border-radius: 4px;
  width: 464px;
  padding: 10px 0 10px 16px;
  border: 1px solid ${Colors.Gray5};
  font: ${fonts.Body2};
  outline: none;
  background-color: ${Colors.Gray1};
`;
