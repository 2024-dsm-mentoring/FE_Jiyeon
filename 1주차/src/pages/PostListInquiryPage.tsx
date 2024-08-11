import styled from "styled-components";
import fonts from "../design-system/fonts/fonts";
import Colors from "../design-system/colors/Colors";
import { PostList } from "../components/PostListInquiryPage/PostList";
import { OptionSelector } from "./../components/PostListInquiryPage/OptionSelector";

export const PostListInquiryPage = () => {
  return (
    <PostListInquiryAll>
      <PostListTitle>게시물 목록</PostListTitle>
      <PostContentsAll>
        <SubContents>
          <OptionSelector />
          <PostListWritingBtn>게시글 작성하기</PostListWritingBtn>
        </SubContents>
        <PostMainContents>
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
        </PostMainContents>
      </PostContentsAll>
    </PostListInquiryAll>
  );
};

const PostContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SubContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PostListInquiryAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 45px;
  margin: 67px 0 174px 0;
`;

const PostMainContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PostListTitle = styled.h4`
  font-size: ${fonts.title3};
  color: ${Colors.Gray6};
`;

const PostListWritingBtn = styled.button`
  background-color: ${Colors.Primary};
  font-size: 15px;
  font-weight: 500;
  padding: 14px 18px;
  color: #ffffff;
  border-radius: 5px;
`;
