import styled from "styled-components";
import Colors from "../design-system/colors/Colors";
import fonts from "../design-system/fonts/fonts";
import BeforeAfter from "../assets/BeforeAfterImg.svg";
import { DeleteBtn } from "../components/NoticeModificationPage/DeleteBtn";
import { ModifyBtn } from "../components/NoticeModificationPage/ModifyBtn";

export const CheckNoticeDetailsPage = () => {
  return (
    <PageContentsAll>
      <PostHead>
        <TitleAll>
          <SubTitleAll>
            <TitleBefore>게시글 목록</TitleBefore>
            <TitleArrow src={BeforeAfter} alt="화살표" />
            <TitleAfter>게시글 상세 확인</TitleAfter>
          </SubTitleAll>
          <PostSubTitleAll>
            <PostTitleAll>
              <PostMainTitle>게시글 제목이 나옵니다</PostMainTitle>
              <PostDate>22/08/16</PostDate>
            </PostTitleAll>
            <BtnAll>
              <DeleteBtn />
              <ModifyBtn />
            </BtnAll>
          </PostSubTitleAll>
        </TitleAll>

        <PostLine />
      </PostHead>
      <PostTextContent>
        게시글 내용이 나옵니다 게시글 내용이 나옵니다게시글 내용이
        나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
        나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
        나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
        나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
        나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
        나옵니다
      </PostTextContent>
    </PageContentsAll>
  );
};

const PostHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostSubTitleAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29.5px;
`;

const PostTitleAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 29px;
`;

const TitleAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49px;
`;

const PostTextContent = styled.div`
  width: 1200px;
  color: ${Colors.Gray10};
  font: ${fonts.Body2};
  line-height: 26px;
  text-align: left;
  display: flex;
  justify-content: start;
  align-items: start;
`;

const PostLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${Colors.Gray3};
  width: 1200px;
`;

const BtnAll = styled.div`
  display: flex;
  gap: 20px;
`;

const PostDate = styled.div`
  color: ${Colors.Gray5};
  font: ${fonts.Body2};
`;

const PageContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100vh;
  gap: 36px;
  margin-top: 67px;
`;

const SubTitleAll = styled.div`
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

const PostMainTitle = styled.div`
  font: ${fonts.Headline2};
  color: ${Colors.Gray10};
`;
