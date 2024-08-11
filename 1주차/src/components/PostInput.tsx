import styled from "styled-components";
import fonts from "../design-system/fonts/fonts";
import Colors from "../design-system/colors/Colors";

export const PostInput = () => {
  return (
    <PostInputAll>
      <TitleContainer type="text" placeholder="제목을 입력해주세요." />
      <ContentsContainer placeholder="내용을 입력해주세요." />
    </PostInputAll>
  );
};

const PostInputAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TitleContainer = styled.input`
  border: none;
  border-radius: 4px;
  color: ${Colors.Gray7};
  font: ${fonts.Body1};
  background-color: ${Colors.Gray3};
  padding: 12px 0 12px 13px;
  width: 1176px;

  &::placeholder {
    color: rgb(0, 0, 0, 0.5);
    font: ${fonts.Body1};
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

const ContentsContainer = styled.textarea`
  width: 1176px;
  height: 452px;
  padding: 24px 0 24px 13px;
  border: none;
  border-radius: 4px;
  color: ${Colors.Gray7};
  font: ${fonts.Body1};
  background-color: ${Colors.Gray3};

  &::placeholder {
    color: rgb(0, 0, 0, 0.5);
    font: ${fonts.Body1};
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
