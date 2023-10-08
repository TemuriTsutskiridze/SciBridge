import styled from "styled-components";

const data = [
  {
    profilePhoto: "profile-picture-1.svg",
    name: "Giorgi Samxaradze",
    message: "Hey, I've got some exciting ne...",
  },
  {
    profilePhoto: "profile-picture-2.svg",
    name: "Sarah Intskirveli",
    message: "Hey, I've got some exciting ne...",
  },
  {
    profilePhoto: "profile-picture-3.svg",
    name: "Ananya Gupta",
    message: "Hey, I've got some exciting ne...",
  },
];

export default function Messages() {
  return (
    <MessagesContainer>
      <Title>Messages</Title>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {data.map((message, index) => {
          return (
            <Message key={index}>
              <img
                src={"/profile-pictures/" + message.profilePhoto}
                alt="profile photo"
              />
              <div>
                <Name>{message.name}</Name>
                <Text>{message.message}</Text>
              </div>
            </Message>
          );
        })}
      </div>
    </MessagesContainer>
  );
}

const MessagesContainer = styled.div`
  width: 29.1rem;
  border-radius: 8px;
  background: var(--pannel-color, #1e1f24);
  padding: 1.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;

const Title = styled.p`
  color: var(--white-100);
  font-size: 2.4rem;
  font-weight: 700;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Name = styled.p`
  color: var(--white-100);
  font-size: 1.4rem;
  font-weight: 700;
`;

const Text = styled.p`
  color: var(--white-70, #b3b3b3);
  font-size: 1.2rem;
  font-weight: 400;
`;
