import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 900px; /* 웹사이트 중앙에 너비 고정 */
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 96px;
  font-weight: 800;
  color: #464646;
  margin-right: 50px; /* 제목과 설명 간격 조정 */
`;

const IntroText = styled.p`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  color: #464646;
  max-width: 1000px;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 50px; /* 사진과 랜덤팩트 간격 조정 */
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 200px; /* 모든 이미지 높이 동일 */
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);4
  }
`;

const FactsContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FactsHeader = styled.div`
  background-color: #ffb625;
  color: #ffffff;
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 100px;
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 10px;
`;

const FactList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 20px;
  font-weight: normal;
  color: #464646;
`;

const FactItem = styled.li`
  margin-bottom: 30px; /* 각 항목 사이 간격 추가 */
  
  &:last-child {
    margin-bottom: 20; /* 마지막 항목에는 여백 없음 */
  }
`;


const About = () => {
  return (
    <AboutSection id="about">  {/* ✅ id 추가 */}
      <ContentWrapper>
        <TitleDescriptionContainer>
          <Title>About.</Title>
          <IntroText>
            I love designing and bringing ideas to life! I'm passionate about learning new things and constantly seek ways to improve myself :)
          </IntroText>
        </TitleDescriptionContainer>
        
        <GridContainer>
          <ImageGrid>
            <Image src="/image1.jpg" alt="Gallery Image 1" />
            <Image src="/image7.jpg" alt="Gallery Image 2" />
            <Image src="/image8.jpg" alt="Gallery Image 3" />
            <Image src="/image4.jpg" alt="Gallery Image 4" />
            <Image src="/image5.jpg" alt="Gallery Image 5" />
            <Image src="/image6.jpg" alt="Gallery Image 6" />
          </ImageGrid>
          
          <FactsContainer>
            <FactsHeader>Random Facts 🌱</FactsHeader>
            <FactList>
              <FactItem>I love cats</FactItem>
              <FactItem>Enjoy traveling</FactItem>
              <FactItem>I’m a homebody</FactItem>
              <FactItem>I love keeping things organized</FactItem>
              <FactItem>I like taking pictures</FactItem>
              <FactItem>Singing in the car is the best</FactItem>
            </FactList>
          </FactsContainer>
        </GridContainer>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;

// 내 똥그라미 사진 위로 새싹이들이 피어오르는 애니메이션 넣고 싶다용
// cd my-portfolio and npm start
// figma icon도 넣어야겠다. 
// <a href="https://www.freepik.com/free-vector/plant-flat-style_209063698.htm#fromView=search&page=1&position=5&uuid=61805855-854b-47e0-b53c-b93053651be6&query=Sprout">Image by juicy_fish on Freepik</a>
// <a href="https://www.freepik.com/free-vector/flat-clouds-collection_15628138.htm#fromView=search&page=1&position=19&uuid=26094f6a-9297-4e3a-b882-c91521807dfb&query=Cloud">Image by freepik</a>