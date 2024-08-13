import styled from "styled-components";
import Colors from "../design-system/colors/Colors";
import fonts from "../design-system/fonts/fonts";
import BeforeAfter from "../assets/BeforeAfterImg.svg";
import { PostInput } from "../components/PostInput";
import { Button } from "../components/Button";

export const NoticeModificationPage = () => {
  return (
    <PageContentsAll>
      <TitleAll>
        <TitleBefore>게시글 목록</TitleBefore>
        <TitleArrow src={BeforeAfter} alt="화살표" />
        <TitleAfter>게시물 수정</TitleAfter>
      </TitleAll>
      <WritingContents>
        <PostInput />
        <Button value="수정완료"></Button>
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
