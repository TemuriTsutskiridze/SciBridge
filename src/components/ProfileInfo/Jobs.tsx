import styled from "styled-components";

const jobs = [
  {
    title: "Data Scientist",
    description:
      "🌟We are seeking a talented Data Scientist to join our team. As a Data Scientist, you will be responsible for collecting, analyzing, and interpreting complex data...",
  },
  {
    title: "Environmental Scientist",
    description:
      "🌟We are seeking a talented Data Scientist to join our team. As a Data Scientist, you will be responsible for collecting, analyzing, and interpreting complex data...",
  },
  {
    title: "Research Scientist - Biotechnology",
    description:
      "🌟We are seeking a talented Data Scientist to join our team. As a Data Scientist, you will be responsible for collecting, analyzing, and interpreting complex data...",
  },
];

export default function Jobs() {
  return (
    <Container>
      <Title>Jobs</Title>
      <JobsContainer>
        {jobs.map((job, index) => {
          return (
            <Job key={index}>
              <JobTitle>{job.title}</JobTitle>
              <JobDescription>{job.description}</JobDescription>
            </Job>
          );
        })}
      </JobsContainer>
      <SeeMoreButton>see more...</SeeMoreButton>
    </Container>
  );
}

const Container = styled.section`
  width: 31.5rem;
  padding: 1.2rem 0.8rem;
  border-radius: 8px;
  background: var(--pannel-color, #1e1f24);
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 1.8rem;
  color: var(--white-100);
  font-weight: 700;
  margin-left: 1.4rem;
`;

const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  margin-top: 1.2rem;
`;

const Job = styled.div`
  width: 100%;
  padding: 1.2rem;
  border-radius: 2px;
  background: var(--subpannel-color);
`;

const JobTitle = styled.h3`
  font-size: 1.6rem;
  color: var(--white-100);
  font-weight: 700;
`;

const JobDescription = styled.p`
  font-size: 1.2rem;
  color: var(--white-40);
  font-weight: 400;
  margin-top: 0 0.4rem;
`;

const SeeMoreButton = styled.button`
  color: var(--primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1.2rem auto 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;
