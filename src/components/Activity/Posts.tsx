import styled from "styled-components";
import Post from "./Post";

const data = [
  {
    name: "Giorgi Samxaradze",
    profession: "Micro Biologist",
    title: "Diseased Frog Research",
    profilePhoto: "profile-picture-1.svg",
    postPhoto: "/post-image-1.png",
    time: "18h",
    text: "Exciting News! 🚀 Our team just wrapped up an amazing science project that pushed the boundaries of innovation and discovery. Stay tuned for updates on our groundbreaking findings and the incredible journey behind it! #ScienceProject #Innovation #Discovery #TeamWork #ScienceMatters",
  },
  {
    name: "Giorgi Samxaradze",
    profession: "Micro Biologist",
    title: "Diseased Frog Research",
    profilePhoto: "profile-picture-2.svg",
    postPhoto: "/post-image-2.png",
    time: "18h",
    text: "Exciting News! 🚀 Our team just wrapped up an amazing science project that pushed the boundaries of innovation and discovery. Stay tuned for updates on our groundbreaking findings and the incredible journey behind it! #ScienceProject #Innovation #Discovery #TeamWork #ScienceMatters",
  },
  {
    name: "Sarah Intskirveli",
    profession: "Machine learner",
    title: "Diseased Frog Research",
    profilePhoto: "profile-picture-3.svg",
    postPhoto: "/post-image-3.png",
    time: "23h",
    text: "Exciting News! 🚀 Our team just wrapped up an amazing science project that pushed the boundaries of innovation and discovery. Stay tuned for updates on our groundbreaking findings and the incredible journey behind it! #ScienceProject #Innovation #Discovery #TeamWork #ScienceMatters",
  },
];

export default function Posts() {
  return (
    <PostsContainer>
      {data.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </PostsContainer>
  );
}

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 74.8rem;
`;
