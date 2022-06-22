import React, { useState } from "react";
import { CarImages } from "./CarImages";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

const CarGallery = ({slides}) => {
const[current, setCurrent]= useState(0);
const length=slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
}
console.log(current);

if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

    return (
    <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
    {CarImages.map((slide,index) => {
        return(
            <div className={index === current ? "slide active" : "slide"} key={index}>
                {index === current && (
                <img src={slide.image} alt="car" className="image"/>
                )}
            </div>
        )

      
    })}
    {/* Car Images */}
    </section>
    );
}

export default CarGallery;