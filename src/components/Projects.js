import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
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
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;

const ProjectCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;

  &:not(:first-child) {
    border-top: 2px solid #d6d6d6; /* 첫 번째 프로젝트에는 라인 제거 */
  }
`;

const ProjectText = styled.div`
  width: 50%;
`;

const ProjectTitle = styled.h2`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #464646;
  margin-bottom: 5px;
`;

const ProjectDate = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: #777777;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: #464646;
`;

const ProjectImage = styled.img`
  width: 45%;
  border-radius: 12px;
  object-fit: cover;
  margin-top: 35px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);4
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 */
  }
`;


const Projects = () => {
  return (
    <ProjectsSection id = "projects">
      <ContentWrapper>
        <Header>Projects</Header>
        <ProjectContainer>
          <ProjectCard>
            <ProjectText>
              <ProjectTitle>AI-Powered Image Classifier with PyTorch</ProjectTitle>
              <ProjectDate>Jan 2025 - Feb 2025</ProjectDate>
              <ProjectDescription>
                I developed an image classifier using PyTorch and VGG16, enabling accurate
                flower classification with a command-line tool for training and prediction,
                GPU acceleration, and adaptability for any labeled dataset.
              </ProjectDescription>
            </ProjectText>
            <ProjectImage
              src="/project1.jpg"
              alt="Project 1"
              onClick={() => window.open("https://github.com/jahabe/Image-Classifier", "_blank")}
            />

          </ProjectCard>

          <ProjectCard>
            <ProjectText>
              <ProjectTitle>MESA Website Design</ProjectTitle>
              <ProjectDate>Jun 2024 - Aug 2024</ProjectDate>
              <ProjectDescription>
                I designed a user-centered website, focusing on usability and accessibility.
                The project involved wireframing, prototyping, and user research, integrating
                feedback for improved design. It's publicly available on Figma, including
                low/high-fidelity wireframes for desktop and mobile, along with a sticker sheet.
              </ProjectDescription>
            </ProjectText>
            <ProjectImage
              src="/project2.jpg"
              alt="Project 2"
              onClick={() => window.open("https://www.figma.com/community/file/1419362772952737336", "_blank")}
            />
          </ProjectCard>
        </ProjectContainer>
      </ContentWrapper>
    </ProjectsSection>
  );
};

export default Projects;
