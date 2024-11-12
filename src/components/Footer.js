import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          <MailchimpForm />
          <Col size={12} sm={6} className="footer-logo">
            <img src={logo} alt="Company Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* Provide actual social media URLs or replace with placeholders */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={navIcon1} alt="Facebook Icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={navIcon2} alt="Twitter Icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={navIcon3} alt="LinkedIn Icon" />
              </a>
            </div>
            <p>&copy; 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
