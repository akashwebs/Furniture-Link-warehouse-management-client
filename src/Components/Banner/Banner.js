import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={'https://i.ibb.co/b3fTrzL/slider-3.jpg'}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='fs-1'>Modern Furniture</h3>
                    <p>shop away to win scratch cards and unlock surpirse</p>
                </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
                <img
                    className="d-block w-100"

                    src={'https://i.ibb.co/P5rG8t6/slider-2.jpg'}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='fs-1'>A fusion of form and function</h3>
                    <p>
                        one of the most uniq desing we are made
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;