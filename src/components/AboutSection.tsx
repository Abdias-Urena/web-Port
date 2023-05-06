"use client";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutSection = () => {
  return (
    <Container className="mt-5" id="about">
      <Row>
        <Col md={4}>
          <Image
            src="/imgperfil.jpg"
            alt=""
            width={325}
            height={325}
            style={{ borderRadius: "50%" }}
          />
        </Col>
        <Col md={8}>
          <h2>Hi, Im Abdias Ureña Soto.</h2>
          <p>
            I am a student at Universidad Nacional Costa Rica, I am studying Information
            Systems Engineering 5 semester, I have skills in programming
            languages ​​such as: <br />
            Javascript, python, c++, java, react, Bootstrap among others.
          </p>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/abdias-ure%C3%B1a-382922274"
            target="_blank"
          >
            Linkedln
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
