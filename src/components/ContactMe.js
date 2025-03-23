import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com"; // EmailJS 추가

const ContactSection = styled.section`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
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
  padding: 10px 0;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const InputRow = styled.div`
  display: flex;
  width: 97.15%;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #464646;
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-family: "Baloo Chettan 2", sans-serif;
  width: 100%;
  padding: 10px;
  border: 2px solid #d6d6d6;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
`;

const Textarea = styled.textarea`
  font-family: "Baloo Chettan 2", sans-serif;
  width: 99.0%;
  border: 2px solid #d6d6d6;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  height: 120px;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #464646;
  color: #ffffff;
  font-family: "Baloo Chettan 2", sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  max-width: 1600px;
  margin-bottom: 200px;

  &:hover {
    background-color:rgb(37, 37, 37);
  }
`;

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all fields!");
      return;
    }

    try {
      await emailjs.send(
        "service_cg6xsx8", // EmailJS에서 생성한 Service ID 입력
        "template_l58k19g", // EmailJS에서 생성한 Template ID 입력
        formData,
        "3dqVzdYcftZYTXW5Z" // EmailJS에서 생성한 Public Key 입력
      );

      setIsSent(true);
      setErrorMessage("");
      setFormData({ name: "", email: "", message: "" }); // 폼 초기화
    } catch (error) {
      console.error("Email sending failed:", error);
      setErrorMessage("Failed to send email. Please try again later.");
    }
  };

  return (
    <ContactSection id="contact">
      <ContentWrapper>
        <Header>Contact me :)</Header>
        <Form onSubmit={handleSubmit}>
          <InputRow>
            <div style={{ width: "48%" }}>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div style={{ width: "48%" }}>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </InputRow>
          <div style={{ width: "100%" }}>
            <Label>Message</Label>
            <Textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {isSent && <p style={{ color: "green" }}>Email sent successfully!</p>}
          <SubmitButton type="submit">Send message</SubmitButton>
        </Form>
      </ContentWrapper>
    </ContactSection>
  );
};

export default ContactMe;
