import React, { useState }   from 'react';
import './Slideshow.css';


const Slideshow = (props) => {

    // --------------------------- STATE ----------------------------------------
    const [ slides, setSlides ]         = useState(props.slides);
    const [ slideIndex, setSlideIndex ] = useState(0);


    // ------------------------- FUNCTIONS --------------------------------------
    function moveRight() {
        if( (slideIndex+1) === slides.length )  setSlideIndex(0);
        else                                    setSlideIndex(slideIndex+1);
    }
        
    function moveLeft() {
        if( (slideIndex-1) < 0 )  setSlideIndex(slides.length-1);
        else                      setSlideIndex(slideIndex-1);
    }
        
    return(
        <div className="slideshow">
            <div className="slide fade"
                 style={{backgroundImage:"url("+ slides[slideIndex].url +")",
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                        }}
            >
                <div className="numbertext">1 / 3</div>
                <div className="text">{slides[slideIndex].name}</div>
            </div>
            <i className="prev" href="" onClick={moveLeft}>&#10094;</i>
            <i className="next" href="" onClick={moveRight}>&#10095;</i>
        </div>
    );
}


export default  Slideshow;