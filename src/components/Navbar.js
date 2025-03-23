import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll"; // react-scroll import

const NavbarContainer = styled.nav`
  background-color: #3d3d3d;
  color: #c9c9c9;
  width: 100%;
  height: 80px; /* 네비게이션 바 높이 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px; /* ✅ 좌우 여백 추가 */
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-sizing: border-box; /* ✅ padding이 전체 너비에 포함되도록 */
`;

const StyledLink = styled.a`
  color: #C9C9C9;  /* 기존 네비게이션 색상 유지 */
  text-decoration: none; /* 밑줄 제거 */
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    text-decoration: underline; /* 마우스 올리면 밑줄 */
  }
`;

const Logo = styled.img`
  height: 45px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 13px; /* 👈 아주 살짝 아래로 */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="/logo.png" alt="Logo" />

      <NavWrapper>
        <NavList>
          <NavItem>
            <Link to="about" smooth={true} duration={500} offset={-100}>
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="projects" smooth={true} duration={500} offset={-100}>
              Projects
            </Link>
          </NavItem>          
          <NavItem>
            <Link to="experience" smooth={true} duration={500} offset={-100}>
              Experience
            </Link>
          </NavItem>

          <NavItem>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              Contact
            </Link>
          </NavItem>
          <NavItem>
            <StyledLink href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </StyledLink>
          </NavItem>
        </NavList>
        <SocialMedia>
          <a href="https://www.linkedin.com/in/jane026/" target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/wldnjs__26/" target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@this_is_ejan" target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/youtube.png" alt="YouTube" />
          </a>
          <a href="https://github.com/jahabe" target="_blank" rel="noopener noreferrer">
            <SocialIcon src="/github.png" alt="GitHub" />
          </a>
        </SocialMedia>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
