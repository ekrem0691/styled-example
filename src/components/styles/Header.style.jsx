import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.header};
`;
export const Logo = styled.img`
  padding: 4rem 0;
  width: 300px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  } ;
  `;


  export const Image = styled.img`
    width: 400px;
  `;

export default StyledHeader;
