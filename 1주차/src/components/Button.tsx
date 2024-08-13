import styled from "styled-components";
import Colors from "../design-system/colors/Colors";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
}

export const Button = ({ value }: ButtonProps) => {
  return (
    <>
      <Btn>{value}</Btn>
    </>
  );
};

const Btn = styled.button`
  background-color: ${Colors.Primary};
  color: ${Colors.Gray1};
  font-size: 15px;
  font-weight: 500;
  width: 1189px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border: none;
  }
`;
