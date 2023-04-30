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
            className="rounded-full shadow-2xl"
          />
        </Col>
        <Col md={8}>
          <h2>Hola, soy Abdias Ureña Soto</h2>
          <p>
            Soy estudiante de la Universidad Nacional, curso la carrera de
            Ingenieria en Sistemas de Información 5 semestre, tengo destrezas en lenguajes de programación como: <br/>
            Javascript, python, c++, java, react, Bootstrap entre otros.
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
