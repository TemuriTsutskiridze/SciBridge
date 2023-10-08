import styled from "styled-components";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    search: yup.string(),
  })
  .required();

export default function Header() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data: { search: string }) => {
    // TODO -> send request and get projects
    console.log(data.search);
  };

  return (
    <HeaderContainer>
      <img src="/logo.png" alt="logo icon" />
      <div style={{ position: "relative" }}>
        <Input type="text" {...register("search")} placeholder="Search"></Input>
        <SearchWrapper>
          <img
            src="/search-icon.png"
            alt="search icon"
            style={{ cursor: "pointer" }}
            onClick={handleSubmit(onSubmit)}
          />
        </SearchWrapper>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3.5rem;
  background-color: var(--pannel-color);
`;

const Input = styled.input`
  width: 27rem;
  padding: 0.9rem 4rem 0.9rem 2rem;
  border-radius: 36px;
  border: 1px solid var(--white-70);
  outline: none;
  background: transparent;
  color: var(--white-70);
  font-weight: 400;

  &::placeholder {
    color: var(--white-40);
  }
`;

const SearchWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0.4rem;
  transform: translateY(-50%);
`;
