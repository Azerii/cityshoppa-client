import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 0 1rem;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    max-width: calc(540px + 1rem);
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 700px) {
    max-width: calc(620px + 1rem);
  }
  @media (min-width: 768px) {
    max-width: calc(720px + 1rem);
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: calc(960px + 1rem);
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: calc(1140px + 1rem);
  }

  // XX-Large devices (larger desktops, 1400px and up)
  // @media (min-width: 1400px) { max-width: 1320px }
  // @media (min-width: 1600px) { max-width: 1400px }
`;

export default Container;
