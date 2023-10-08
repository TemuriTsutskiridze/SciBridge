import styled from "styled-components";

import ProfileInfo from "./ProfileInfo";
import Jobs from "./Jobs";

export default function LeftAside() {
  return (
    <Container>
      <ProfileInfo />
      <Jobs />
    </Container>
  );
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;
