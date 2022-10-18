import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div {
    /* Tüm elemanların büyümesine izin verir */
    flex-grow: 1;
    /* Tüm div'lerin eşit miktarda alan tutabilmesine izin verir */
    flex-basis: 0;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
}
`;

export default Flex;
