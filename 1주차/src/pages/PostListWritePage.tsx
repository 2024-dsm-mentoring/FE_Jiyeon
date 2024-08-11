import styled from "styled-components";
import Colors from "../design-system/colors/Colors";
import fonts from "../design-system/fonts/fonts";
import BeforeAfter from "../assets/BeforeAfterImg.svg";
import { PostInput } from "../components/PostInput";

export const PostListWritePage = () => {
  return (
    <PageContentsAll>
      <TitleAll>
        <TitleBefore>게시글 목록</TitleBefore>
        <TitleArrow src={BeforeAfter} alt="화살표" />
        <TitleAfter>게시글 상세 확인</TitleAfter>
      </TitleAll>
      <WritingContents>
        <PostInput />
        <PostBtn>올리기</PostBtn>
      </WritingContents>
    </PageContentsAll>
  );
};

const PageContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 98px;
`;

const WritingContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const TitleAll = styled.div`
  display: flex;
  gap: 20px;
`;

const TitleArrow = styled.img``;

const TitleBefore = styled.h6`
  font: ${fonts.Body1};
  font-weight: 400;
  color: ${Colors.Gray5};
`;

const TitleAfter = styled.h6`
  font: ${fonts.title3};
  color: ${Colors.Gray6};
`;

const PostBtn = styled.button`
  background-color: ${Colors.Primary};
  color: ${Colors.Gray1};
  padding: 14px 573.5px;
  font-size: 15px;
  font-weight: 500;
`;
