import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const StyledNavbar = styled.nav`
  display: flex;
  padding: 0% 10%;
  padding-top: 1%;
  justify-content: center;
  align-items: center;
`;

export const NavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(182,182,182,17%);
    border-radius: 10px;
    padding: 1% 2%;
    width: 100%;
`;

export const NavUserPhoto = styled.div`
  width: 60px;
  height: 60px;
`;

export const UserPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.li`
  font-family: ${inter};
  font-size: 17px;
  font-weight: bold;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  background: rgb(219,81,161);
  background: linear-gradient(90deg, rgba(219,81,161,1) 27%, rgba(117,117,251,1) 100%);

  a {
    display: flex;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    color: white;

    > svg {
      width: 15px;
      fill: white;
    }
  }
`;
