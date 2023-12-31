import Header from "../components/Header";
import LeftAside from "../components/ProfileInfo/LeftAside";
import Activity from "../components/Activity/Activity";
import Messages from "../components/Messages";

import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainContainer>
        <LeftAside />
        <Activity />
        <Messages />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  display: flex;
  gap: 1.2rem;
  padding: 1.6rem 2rem;
  justify-content: space-between;
`;
