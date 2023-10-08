import styled from "styled-components";
import UploadPreview from "./UploadPreview";
import Posts from "./Posts";

export default function Activity() {
  return (
    <ActivityContainer>
      <UploadPreview />
      <Posts />
    </ActivityContainer>
  );
}

const ActivityContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 74.8rem;
`;
