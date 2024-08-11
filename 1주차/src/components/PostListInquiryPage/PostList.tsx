import styled from "styled-components";
import fonts from "../../design-system/fonts/fonts";

export const PostList = () => {
  return (
    <PostListContainer>
      <PostListContents>
        <PostListTitle>제목이 들어가요</PostListTitle>
        <PostListDate>22/08/16</PostListDate>
      </PostListContents>
    </PostListContainer>
  );
};

const PostListContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostListContainer = styled.div`
  width: 1120px;
  padding: 20px 40px;
  /* height: 70px; */
  border-radius: 4px;
  box-shadow: 0 1px 15px 0 rgb(0, 0, 0, 0.1);
`;

const PostListTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 22px;
  font-weight: 400;
`;

const PostListDate = styled.div`
  font: ${fonts.Body1};
`;
