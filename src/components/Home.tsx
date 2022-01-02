import React, { useState, useEffect, useRef } from "react";
import './styles/Home.scss';
import home2 from "./images/home2.jpg";
import home3 from "./images/home3.jpg";
import home4 from "./images/home4.jpg";
import home5 from "./images/home5.jpg";

const images = [home2, home3, home4, home5];
const delay = 2500;

const Home = () => {

    const [index, setIndex] = useState(0);
    const timeoutRef:any = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="app-container">
            <div className="one">
                {/* <img src={home1} /> */}
            </div>
            <div className="slideshow">
                <div className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((image, index) => (
                        <img className="slide" key={index} src={image} />
                    ))}
                </div>
                <div className="slideshowDots">
                    {images.map((_, idx) => (
                        <div key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        >
                        </div>
                    ))}
                </div>
            </div>

            <div className="filler">

            </div>
        </div>
    );
};

export default Home;