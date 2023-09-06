// src/components/navbar.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { StyledNavbar, NavContent, NavUserPhoto,UserPhotoImage, NavLinks, NavLink } from './style';
import Link from 'next/link';

interface NavbarProps {
  userPhotoUrl?: string; 
}

const Navbar: React.FC<NavbarProps> = ({ userPhotoUrl }) => {
  const defaultUserPhotoUrl = "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  const router = useRouter();
  const currentPath = router.asPath;
  let isActive = false;

  return (
    <StyledNavbar>
      <NavContent>
        <NavUserPhoto>
          <UserPhotoImage src={userPhotoUrl || defaultUserPhotoUrl} alt="Foto do usuário" />
        </NavUserPhoto>
        <NavLinks>
          <NavLink>
            <Link href="/homePage">
              Create
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </Link>
          </NavLink>
        </NavLinks>
      </NavContent>
    </StyledNavbar>
  );
};

export default Navbar;
