import styled from "styled-components";
import PlusIcon from "/plus.svg";

export default function UploadPreview() {
  return (
    <Container>
      <ShareText> Share your project to others</ShareText>
      <UploadButton>
        <img src={PlusIcon} alt="plus icon" />
        Upload a Project
      </UploadButton>
    </Container>
  );
}

const Container = styled.section`
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: var(--pannel-color, #1e1f24);
`;

const ShareText = styled.p`
  color: var(--white-100);
  font-size: 2rem;
  font-weight: 700;
`;

const UploadButton = styled.button`
  width: 23.5rem;
  min-height: 5.6rem;
  border-radius: 36px;
  border: 1px solid var(--primary, #006eff);
  background: var(--hover-hover-primary, #005dd6);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  font-size: 2rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  margin-top: 0.8rem;
`;
