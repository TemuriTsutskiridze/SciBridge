import styled from "styled-components";
import GlobeIcon from "/globe.svg";
import LikeIcon from "/thumbs-up.svg";
import CommentIcon from "/comment-icon.svg";
import EyeIcon from "/eye.svg";

type TPostProps = {
  post: {
    name: string;
    profession: string;
    title: string;
    profilePhoto: string;
    postPhoto: string;
    time: string;
    text: string;
  };
};

export default function Post(props: TPostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <img
          src={"/profile-pictures/" + props.post.profilePhoto}
          alt="profile photo"
        />
        <div>
          <PostName>{props.post.name}</PostName>
          <PostProfession>{props.post.profession}</PostProfession>
          <PostTime>
            {props.post.time} • <img src={GlobeIcon} alt="globe icon" />
          </PostTime>
        </div>
      </PostHeader>
      <PostTitle>{props.post.title}</PostTitle>
      <PostDescription>{props.post.text}</PostDescription>
      <img
        src={"/post-photos/" + props.post.postPhoto}
        alt="post photo"
        style={{ marginTop: "1.2rem" }}
      />
      <PostFooter>
        <LeftContainer>
          <LikeCommentDiv>
            <img
              src={LikeIcon}
              alt="thumbs up/like icon"
              style={{ cursor: "pointer" }}
            />
            <LikeCommentText>Like</LikeCommentText>
          </LikeCommentDiv>
          <LikeCommentDiv>
            <img
              src={CommentIcon}
              alt="thumbs up/like icon"
              style={{ cursor: "pointer" }}
            />
            <LikeCommentText>Comment</LikeCommentText>
          </LikeCommentDiv>
        </LeftContainer>
        <ViewsContainer>
          64 Views • <img src={EyeIcon} alt="eye/view icon" />
        </ViewsContainer>
      </PostFooter>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  width: 100%;
  padding: 1.6rem;
  border-radius: 8px;
  background: var(--pannel-color, #1e1f24);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PostName = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
`;

const PostProfession = styled.p`
  color: var(--white-70, #b3b3b3);
  font-size: 1.2rem;
  font-weight: 400;
`;

const PostTime = styled.p`
  color: var(--white-40, #666);
  font-size: 0.8rem;
  font-weight: 400;
`;

const PostTitle = styled.p`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: 1.3rem;
`;

const PostDescription = styled.p`
  color: var(--white-100, #fff);
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 1.2rem;
`;

const PostFooter = styled.div`
  padding: 1.2rem 2.4rem 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1.2rem;
  border-top: 1px solid var(--white-20, #333);
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const LikeCommentDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const LikeCommentText = styled.p`
  color: var(--white-100);
  font-size: 1.8rem;
  font-weight: 400;
`;

const ViewsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--white-70, #b3b3b3);
  font-size: 1.6rem;
  font-weight: 400;
`;
