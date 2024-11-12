import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Fuel Your Growth With Us:</h2>
                        <p>The wrap offer will allow you to launch your online presence with tailor-made strategic support,<br/>without compromising on the quality of design and SEO.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <span>👉 Prestation SEO</span>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image" /> */}
                                <span>👉 Custom design</span>
                            </div>
                            <div className="item">
                                {/* <img src={meter3} alt="Image" /> */}
                                <span>👉 Optimized digital strategy</span>
                            </div>
                        </Carousel>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
