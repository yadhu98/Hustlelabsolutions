import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Track visibility state
  const [animationClass, setAnimationClass] = useState(""); // Animation class state

  const toRotate = [
    "Web Development", 
    "Videography & Photography", 
    "Influencer Marketing", 
    "Ad Campaign", 
    "Content Creation", 
    "Social Media Marketing"
  ];
  
  const delay = 3000;  // Time between switching to the next item

  useEffect(() => {
    let interval;

    // Start or stop animation based on visibility
    if (isVisible) {
      setAnimationClass("animate__animated animate__fadeIn");
      interval = setInterval(() => {
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % toRotate.length);
      }, delay);
    } else {
      // Reset text rotation index and animation class when not in view
      setCurrentTextIndex(0);
      setAnimationClass("");
    }

    return () => clearInterval(interval); // Clean up interval on component unmount or visibility change
  }, [isVisible,toRotate.length]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="text-content">
            <TrackVisibility
              partialVisibility
              onChange={(inView) => setIsVisible(inView)} // Update visibility state directly
            >
              {() => (
                <div className={animationClass}>
                  <span className="tagline">Welcome to Hustle Lab</span>
                  <h1>
                    <span>At Hustle Labs we do</span>{" "}<br />
                    <span className="txt-rotate">
                      <span className="wrap">
                        {toRotate[currentTextIndex]}
                      </span>
                    </span>
                  </h1>
                  <p>
                    At Hustle Labs, we believe in keeping things simple: Less Meetings, More Results. That’s why we’ve crafted three powerful offers: 
                    <span style={{ color: '#DE6EA' }}> Simple Strategy, Automated Growth, and Fast Content—built</span> 
                    to streamline your marketing, maximize impact, and fuel your growth without the fuss.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="image-content">
            <TrackVisibility
              partialVisibility
              onChange={(inView) => setIsVisible(inView)} // Track image visibility as well
            >
              {() => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
