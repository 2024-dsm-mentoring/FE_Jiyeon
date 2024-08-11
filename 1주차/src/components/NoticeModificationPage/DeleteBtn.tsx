import styled from "styled-components";
import Colors from "../../design-system/colors/Colors";
import fonts from "../../design-system/fonts/fonts";

export const DeleteBtn = () => {
  return (
    <>
      <Btn>삭제하기</Btn>
    </>
  );
};

const Btn = styled.button`
  background-color: ${Colors.Gray1};
  border: ${Colors.Default} 1px solid;
  border-radius: 5px;
  color: ${Colors.Default};
  padding: 14px 18px;
  font-weight: 500;
  font-size: 15px;

  &:focus {
    outline: none;
  }
  &:hover {
    color: ${Colors.Gray1};
    background-color: ${Colors.Default};
    border: none;
  }
`;
