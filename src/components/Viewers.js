import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="viewers" />
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  padding: 2rem 0px 1.5px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 0.75rem;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;