import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import DB from "./DB.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import picture_1 from "./img/picture_1.jpg"
import picture_2 from "./img/picture_2.jpg"
import picture_3 from "./img/picture_3.jpg"
import picture_4 from "./img/picture_4.jpg"
import picture_5 from "./img/picture_5.jpg"
import picture_6 from "./img/picture_6.jpg"
import picture_7 from "./img/picture_7.jpg"
import picture_8 from "./img/picture_8.jpg"
import picture_9 from "./img/picture_9.jpg"
import picture_10 from "./img/picture_10.jpg"
import left_svg from "./img/arrows/left.svg"
import right_svg from "./img/arrows/right.svg"

function App() {
   
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  try{
  return (
    <div className="Carousel">
      <Header />
      <Slider {...settings}>
        {DB.slides.map((slide, index) =>
          <Slide
            key={index}
            src={slide.picture}
            content={slide.content}
          />
        )}
      </Slider>
    </div>
  )
} catch {}
}

   
export default App;
