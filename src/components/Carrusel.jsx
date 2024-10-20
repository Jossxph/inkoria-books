import { useRef, useEffect, useState } from "react";
import '../../public/css/home.css'

const Carrusel = () => {
    const slider = useRef(null);
    const [counter, setCounter] = useState(0);
    const sliderSection = useRef([]);
    const widthImg = 100 / 10; // Si tienes 3 imágenes, ajusta este número dependiendo de cuántas imágenes tengas.

    const moveToRight = () => {
        if (counter >= sliderSection.current.length - 1) {
            setCounter(0);
            slider.current.style.transform = `translateX(0%)`;
            slider.current.style.transition = "none";
        } else {
            setCounter((prev) => prev + 1);
            const newPosition = (counter + 1) * widthImg;
            slider.current.style.transform = `translateX(-${newPosition}%)`;
            slider.current.style.transition = "all ease .6s";
        }
    };

    const moveToLeft = () => {
        if (counter <= 0) {
            setCounter(sliderSection.current.length - 1);
            const newPosition = widthImg * (sliderSection.current.length - 1);
            slider.current.style.transform = `translateX(-${newPosition}%)`;
            slider.current.style.transition = "none";
        } else {
            setCounter((prev) => prev - 1);
            const newPosition = (counter - 1) * widthImg;
            slider.current.style.transform = `translateX(-${newPosition}%)`;
            slider.current.style.transition = "all ease .6s";
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            moveToRight();
        }, 10000); // Cada 10 segundos
        return () => clearInterval(interval); // Limpieza del intervalo
    }, [counter]);

    return (
        <div className="container-mediy">
            <div className="body-carrusel">
                <div className="container-carousel">
                    <div className="carruseles" ref={slider} id="slider">
                        <section className="slider-section" ref={(el) => (sliderSection.current[0] = el)}>
                            <img
                                src="../../src/assets/img/Banners+inkoria/banner1.webp"
                                alt=""
                            />
                        </section>
                        <section className="slider-section" ref={(el) => (sliderSection.current[1] = el)}>
                            <img
                                src="../../src/assets/img/Banners+inkoria/banner2.webp"
                                alt=""
                            />
                        </section>
                        <section className="slider-section" ref={(el) => (sliderSection.current[2] = el)}>
                            <img
                                src="../../src/assets/img/Banners+inkoria/banner3.webp"
                                alt=""
                            />
                        </section>
                    </div>
                    <div className="btn-left" onClick={moveToLeft}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="btn-right" onClick={moveToRight}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrusel;
