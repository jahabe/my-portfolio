import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #3d3d3d;
  color: #c9c9c9;
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  font-weight: regular;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* ✅ 변경: 100vw → 100% */
  box-sizing: border-box; /* ✅ padding 포함 */
  position: relative;
  height: 60px;
  left: 0;
  right: 0;
`;


const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 35px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  height: 25px;
`;

const Icon = styled.img`
  height: 30px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <Logo src="logo.png" alt="Logo" />
        <span>Jane Choi © 2025</span>
      </LeftSection>

      <SocialIcons>
          <a href="https://www.linkedin.com/in/jane026/" target="_blank" rel="noopener noreferrer">
            <Icon src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/wldnjs__26/" target="_blank" rel="noopener noreferrer">
            <Icon src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@this_is_ejan" target="_blank" rel="noopener noreferrer">
            <Icon src="/youtube.png" alt="YouTube" />
          </a>
          <a href="https://github.com/jahabe" target="_blank" rel="noopener noreferrer">
            <Icon src="/github.png" alt="GitHub" />
          </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
