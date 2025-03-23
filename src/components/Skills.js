import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Styled Components
const SkillsSection = styled.section`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  margin-bottom: 80px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 900px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: #ffb625;
  color: #ffffff;
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 400px;
  border-radius: 12px;
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  width: 100%;
  justify-content: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SkillName = styled.p`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #464646;
  margin: 0;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15px;
  background-color: #dcdcdc;
  border-radius: 6px;
  overflow: visible;

  &:hover .tooltip {
    opacity: 1;
    transform: translateY(-90%);
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => (props.animate ? props.width + "%" : "0%")};
  background-color: #ffb625;
  border-radius: 6px;
  transition: width 1.5s ease-in-out;
`;

const Tooltip = styled.span`
  position: absolute;
  top: 0;
  left: ${(props) => props.width}%;
  transform: translateX(-50%) translateY(0);
  color: #ffb625;
  font-size: 18px;
  font-family: "Baloo Chettan 2", sans-serif;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
`;



const Skills = () => {
  const sectionRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate]);

  const skills = [
    { name: "Visual Studio", width: 95 },
    { name: "Korean", width: 100 },
    { name: "UX Design", width: 90 },
    { name: "English", width: 100 },
    { name: "Figma", width: 90 },
    { name: "Java", width: 60 },
    { name: "C++", width: 85 },
    { name: "Python", width: 75 },
  ];

  return (
    <SkillsSection ref={sectionRef}>
      <ContentWrapper>
        <Header>My Skills</Header>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillName>{skill.name}</SkillName>
              <ProgressBarContainer>
              <Tooltip className="tooltip" width={skill.width}>
                {skill.width}%
              </Tooltip>
              <ProgressBar width={skill.width} animate={animate} />
            </ProgressBarContainer> 
            </SkillItem>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </SkillsSection>
  );
};

export default Skills;
