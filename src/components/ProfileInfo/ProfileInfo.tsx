import styled from "styled-components";
import ProfileBackground from "/profile-info/cover.png";
import ProfilePicture from "/profile-info/profile-picture.svg";

export default function ProfileInfo() {
  return (
    <ProfileContainer>
      <TopSection>
        <img src={ProfileBackground} alt="profile background" />
        <ProfileImageContainer>
          <img src={ProfilePicture} alt="profile picture " />
          <ActiveIcon></ActiveIcon>
        </ProfileImageContainer>
        <ProfileName>Chad Gonzalez</ProfileName>
      </TopSection>
      <InfoWrapper>🔬 Scientist | Researcher | Innovator</InfoWrapper>
      <InfoWrapper>
        Dedicated to pushing the boundaries of Rocket Science through
        cutting-edge research and innovation. Let's connect and drive progress
        together.{" "}
      </InfoWrapper>
      <InfoWrapper>#Science #Research #Innovation</InfoWrapper>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  width: 33.7rem;
  border-radius: 8px;
  background: var(--pannel-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ProfileName = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white-100);
  margin: 6.3rem 0 1.2rem;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-bottom: 1px solid var(--white-20, #333);
`;

const ProfileImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ActiveIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  border: 1px solid var(--white-90, #e6e7e8);
  background: #31bb1a;
  position: absolute;
  bottom: 0.2rem;
  right: 0.8rem;
`;

const InfoWrapper = styled.div`
  width: 100%;
  padding: 1.6rem;
  border-bottom: 1px solid var(--white-20, #333);
  color: var(--white-70, #b3b3b3);
  font-size: 1.6rem;
  font-weight: 400;
`;
