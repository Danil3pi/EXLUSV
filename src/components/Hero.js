import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components/macro'; //!!!!!!!!!!!!!!!!!!!!!!
import { Button } from './Button';

import { IoMdArrowRoundForward } from 'react-icons/io'; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'; // Это какие-то объекты, которые находятся в пакете react-icons, который я установил в начале.

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative; //Чтобы можно было позицонировать элементы относительно этого контейнера

    overflow: hidden;
`;

const HeroWraper = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;  

    position: relative;

`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;

    align-items: center;
    justify-content: center;
`;

const HeroImage = styled.img`
    position :absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    object-fit: cover; //Сохраняет пропорции, при изменении внешнего контейнера
    //Определяет как содержимое элемента должно 
    //заполнять внешний контейнер относительно его ширины и высоты
`;
const HeroContent = styled.div`
    position: relative;
    z-index: 10;

    display: flex;
    flex-direction: column;

    max-width: 1600px;
    width: calc(100% - 100px);//Расчитывает свойства
    
    color: #fff;

    h1{
        font-size: clamp(1rem, 8vw, 2rem); //clamp(min, предпочтительное, max)

        font-weight: 400px;
        text-transform: uppercase;

        text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        text-align: left;
    }

    p{
        margin-bottom: 2rem;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background-color: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1111111

    transition: .3s;

    &:hover{
        background: #cd853f;
        transform: scale(1.05); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    
    display: flex;
    z-index: 10;
`;

//А тут я наследую от IoArrowBack стили, и уже мой элемент PrevArrow является кнопкой
const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons};
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons};
`;

const Hero = ({ slides }) => {

    let [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    useEffect(() => {// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }

        timeout.current = setTimeout(nextSlide, 1000);// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        return function () {// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (timeout.current) {
                clearTimeout(timeout.current);// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        }
    }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
    };


    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1); // Почему не работает инкремент
    };


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <HeroSection>
            < HeroWraper >
                {slides.map((slide, index) => (
                    <HeroSlide key={index}>
                        {
                            index === current && ( //как я понял, здесь используется 
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Button to={slide.path} primary="true"
                                            css={`//Это специальный синтаксис
                                        max-width: 160px;
                                    `}
                                        >
                                            {slide.lable}
                                            <Arrow />
                                        </Button>
                                    </HeroContent>
                                </HeroSlider>
                            )
                        }
                    </HeroSlide>
                ))}

                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWraper>
        </HeroSection> //Вся секция
    )
};

export default Hero;
