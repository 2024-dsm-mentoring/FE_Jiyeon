import styled from "styled-components";
import Colors from "../../design-system/colors/Colors";
import fonts from "../../design-system/fonts/fonts";

export const ModifyBtn = () => {
  return (
    <>
      <Btn>수정하기</Btn>
    </>
  );
};

const Btn = styled.button`
  background-color: ${Colors.Gray1};
  border: ${Colors.Primary} 1px solid;
  border-radius: 5px;
  color: ${Colors.Primary};
  padding: 14px 18px;
  font-weight: 500;
  font-size: 15px;

  &:focus {
    outline: none;
  }
  &:hover {
    color: ${Colors.Gray1};
    background-color: ${Colors.Primary};
    border: none;
  }
`;
