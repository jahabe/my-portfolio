import React from "react";
import styled from "styled-components";

const ExperienceSection = styled.section`
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
  margin-bottom: 10px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 10px;
  top: 40px;  /* 줄 맞추기 조정 */
  bottom: 1px;  /* 하단도 줄임 */
  width: 4px;
  background: #d6d6d6;
`;

const TimelineDot = styled.div`
  width: 14px;
  height: 14px;
  background: #ffb625;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  top: 35px;
`;

const ExperienceContent = styled.div`
  font-family: "Baloo Chettan 2", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 30px; /* 기존 40px에서 줄임 */
`;

const JobTitleRow = styled.div`
  display: flex;
  align-items: center;  /* 높이 맞춤 */
  gap: 8px;  /* 기존 15px → 8px로 줄임 */
  flex-wrap: wrap; /* 줄바꿈 허용 */
`;

const JobTitle = styled.h3`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #ffb625;
`;

const JobPosition = styled.p`
  font-size: 20px;
  color: #777777;
`;

const JobDate = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #464646;
  margin-top: 0;  /* 기존 여백 제거 */
`;

const JobDescription = styled.p`
  font-size: 18px;
  color: #464646;
  margin-top: 0px;  /* 기존 10px에서 줄임 */
`;

const Experience = () => {
  return (
    <ExperienceSection id ="experience">
      <ContentWrapper>
        <Header>Experience</Header>
        <Timeline>
          <TimelineLine />
          {/* Experience 1 */}
          <TimelineItem>
            <TimelineDot />
            <ExperienceContent>
              <JobTitleRow>
                <JobTitle>Innovators Hub</JobTitle>
                <JobPosition>| Associate Club Founder / Chief Designer / Marketer</JobPosition>
              </JobTitleRow>
              <JobDate>2024-2025</JobDate>
              <JobDescription>
                I design social media posts, flyers, and other visuals for club activities,
                ensuring engaging and cohesive branding. Here's a link to the club's Instagram to check out my work.
              </JobDescription>
            </ExperienceContent>
          </TimelineItem>

          {/* Experience 2 */}
          <TimelineItem>
            <TimelineDot />
            <ExperienceContent>
              <JobTitleRow>
                <JobTitle>WSOS</JobTitle>
                <JobPosition>| STEM Scholar Lead</JobPosition>
              </JobTitleRow>
              <JobDate>2024-2025</JobDate>
              <JobDescription>
                Guided and supported a cohort of STEM scholars, fostering academic and
                professional development through personalized support and regular check-ins.
              </JobDescription>
            </ExperienceContent>
          </TimelineItem>

          {/* Experience 3 */}
          <TimelineItem>
            <TimelineDot />
            <ExperienceContent>
              <JobTitleRow>
                <JobTitle>RiSE Program</JobTitle>
                <JobPosition>| CS Mentor</JobPosition>
              </JobTitleRow>
              <JobDate>2023-2024</JobDate>
              <JobDescription>
                Mentored STEM students, guiding them through academic challenges and fostering
                a user-centric approach to problem-solving.
              </JobDescription>
            </ExperienceContent>
          </TimelineItem>

          {/* Experience 4 */}
          <TimelineItem>
            <TimelineDot />
            <ExperienceContent>
              <JobTitleRow>
                <JobTitle>Seattle Best Insurance</JobTitle>
                <JobPosition>| Administrative Assistant</JobPosition>
              </JobTitleRow>
              <JobDate>2021-2023</JobDate>
              <JobDescription>
                Managed IT systems by updating software and digitizing documents, ensuring secure
                and efficient management of records to support operational excellence.
              </JobDescription>
            </ExperienceContent>
          </TimelineItem>
        </Timeline>
      </ContentWrapper>
    </ExperienceSection>
  );
};

export default Experience;
