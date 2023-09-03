import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ComingSoonScreen = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "350px" }}
    >
      <Row className="w-100">
        <Col className="text-center">
          <p className="coming-soon-text">Coming Soon</p>
        </Col>
      </Row>
    </Container>
  );
};
