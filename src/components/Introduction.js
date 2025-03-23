import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// 🌱 1. 타이핑 훅 (한 줄로 사용하기!)
const useTypewriter = (text, delay = 0, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index === text.length) {
          clearInterval(interval);
          setIsTyping(false); // ✅ 타이핑 완료 시 커서 멈춤
        }
      }, speed);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return { displayedText, isTyping }; // ✅ 객체로 반환
};

// 🌿 2. 스타일 컴포넌트
const IntroductionSection = styled.section`
  background-color: #464646;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  position: relative;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-right: 50px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 70%;
  object-fit: cover;
  transform: translateY(60px);
  z-index: 2;
  position: relative;
`;

const Sprout = styled(motion.img)`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 82px;
  left: 22px;
  transform: rotate(-40deg);
  z-index: 1;
`;

const Sprout2 = styled(motion.img)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 66px;
  left: 46px;
  transform: rotate(-30deg);
  z-index: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Name = styled.h1`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 96px;
  font-weight: 1500;
  color: #ffb625;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const IntroText = styled.p`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 24px;
  color: #c9c9c9;
  margin: 5px 0;
  white-space: pre-line;
  overflow: hidden;
  min-height: 96px;   // ✅ 3줄 확보 (24px * 3 + 여유)
  line-height: 1.3;   // ✅ 줄 간격 안정화
`;

const Cursor = styled.span`
  display: inline-block;
  width: 5px;
  height: 1em;
  background-color: #c9c9c9;
  margin-left: 6px;

  &.blinking {
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    30% {
      opacity: 0;
    }
  }
`;


const Introduction = () => {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  const fullText =
    "   Hello! My name is Jane :)\n" +
    "   I'm a junior at University of Washington Bothell\n" +
    "   studying Computer Science and Software Engineering.";

  const { displayedText, isTyping } = useTypewriter(fullText, 200); // ✅ 구조 분해

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <IntroductionSection ref={sectionRef}>
      <ContentWrapper>
        <ProfileImageWrapper>
          <ProfileImage src="/profile1.jpg" alt="Profile" />
          <Sprout
            src="/logo.png"
            alt="Sprout1"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          />
          <Sprout2
            src="/logo.png"
            alt="Sprout2"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
          />
        </ProfileImageWrapper>

        <TextContainer>
          <Name>
            JANE CHOI <span style={{ marginLeft: "10px" }}>🌱</span>
          </Name>
          <IntroText>
            {displayedText}
            <Cursor className={isTyping ? "blinking" : ""} />
          </IntroText>
        </TextContainer>
      </ContentWrapper>
    </IntroductionSection>
  );
};

export default Introduction;