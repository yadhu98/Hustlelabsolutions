import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
                <div 
                className="animate__animated animate__fadeIn"
                >
                <h2>Get In Touch</h2>
                
                <h3>Lets create something together !</h3>
                  <Accordion className="accordion-hustle">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Get an enquiry</Accordion.Header>
                    <Accordion.Body>
                      <ContactForm/>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Chat us in Whatsapp
                    </Accordion.Header>
                    <Accordion.Body>
                      <a href="https://wa.me/9061226636" target="__blank" style={{textDecoration : 'none'}}>
                      <button className="hustlebutton" >
                        <span>
                          Chat with us
                          </span>
                        </button>
                      </a>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Drop us an E-Mail</Accordion.Header>
                    <Accordion.Body>
                      < a href="mailto:someone@example.com"  style={{textDecoration : 'none'}}>
                      <button className="hustlebutton">
                        <span>
                          Drop a mail
                        </span>
                      </button>
                      </a>
                    </Accordion.Body>
                    </Accordion.Item>
                   
                  </Accordion>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
