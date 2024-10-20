import { useRef, useEffect, useState } from "react";
import "../../css/Blog/HomeBlog.css";

const tarjetas = [
    {
        categoria: "proximos",
        href: "/blog/lanzasept1",
        img: "../../..//src/assets/img/blog/Libros del mes.jpg",
        titulo: "🌻¡¡Nuevos lanzamientos de setiembre!!🌼",
        descripcion: "En este mes de la primavera, hemos seleccionado nuevas y emocionantes historias...",
    },

    {
        categoria: "proximos",
        href: "/blog/lanzaagos2",
        img: "../../..//src/assets/img/blog/agosto.jpg",
        titulo: "Los libros más esperados de Agosto✨",
        descripcion: "En este mes de Agosto, hemos seleccionado nuevas y emocionantes historias...",
    },

];

const categorias = ["publicaciones", "proximos" ];

const postRecientes = [
    { href: "/blog/lanzaagos2", titulo: "🌻¡¡Nuevos lanzamientos de setiembre!!🌼" },
];

function HomeBlog() {
    const slider = useRef(null);
    const [counter, setCounter] = useState(0);
    const sliderSection = useRef([]);
    const widthImg = 100 / 10;

    const moveToRight = () => {
        const nextCounter = counter + 1 >= sliderSection.current.length ? 0 : counter + 1;
        setCounter(nextCounter);
        const newPosition = nextCounter * widthImg;
        slider.current.style.transform = `translateX(-${newPosition}%)`;
        slider.current.style.transition = "all ease .6s";
    };

    const moveToLeft = () => {
        const prevCounter = counter - 1 < 0 ? sliderSection.current.length - 1 : counter - 1;
        setCounter(prevCounter);
        const newPosition = prevCounter * widthImg;
        slider.current.style.transform = `translateX(-${newPosition}%)`;
        slider.current.style.transition = "all ease .6s";
    };

    useEffect(() => {
        const interval = setInterval(() => {
            moveToRight();
        }, 10000);
        return () => clearInterval(interval);
    }, [counter]);

    const [selectedCategory, setSelectedCategory] = useState("publicaciones");

    // Restore category from localStorage on component mount
    useEffect(() => {
        const savedCategory = localStorage.getItem("selectedCategory");
        if (savedCategory) {
            setSelectedCategory(savedCategory);
        }
    }, []);

    const handleCategoryClick = (event, category) => {
        event.preventDefault();
        setSelectedCategory(category);
        localStorage.setItem("selectedCategory", category);
    };

    return (
        <div className="homeblog-container">
            <div className="container-mediy">
                <div className="body-carrusel">
                    <div className="container-carousel">
                        <div className="carruseles" ref={slider} id="slider">
                            <section className="slider-section" ref={(el) => (sliderSection.current[0] = el)}>
                                <img src="../../../src/assets/img/blog/banners/bannerblog1.webp" alt="" />
                            </section>
                            <section className="slider-section" ref={(el) => (sliderSection.current[1] = el)}>
                                <img src="../../../src/assets/img/blog/banners/bannerblog2.webp" alt="" />
                            </section>
                            <section className="slider-section" ref={(el) => (sliderSection.current[2] = el)}>
                                <img src="../../../src/assets/img/blog/banners/bannerblog3.webp" alt="" />
                            </section>
                            <section className="slider-section" ref={(el) => (sliderSection.current[3] = el)}>
                                <img src="../../../src/assets/img/blog/banners/bannerblog4.webp" alt="" />
                            </section>
                            <section className="slider-section" ref={(el) => (sliderSection.current[4] = el)}>
                                <img src="../../../src/assets/img/blog/banners/bannerblog5.webp" alt="" />
                            </section>
                            <section className="slider-section" ref={(el) => (sliderSection.current[5] = el)}>
                                <img src="../../../src/assets/img/blog/banners/bannerblog6.webp" alt="" />
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

            <main className="main-container">
                <div className="homeblog-public">
                    <section className="section-blog">
                        <div className="homeblog-caja-blog">
                            {tarjetas
                                .filter(
                                    (tarjeta) =>
                                        selectedCategory === "publicaciones" || tarjeta.categoria === selectedCategory
                                )
                                .map((tarjeta, index) => (
                                    <div key={index} className="homeblog-contenido aparecer">
                                        <a href={tarjeta.href}>
                                            <img src={tarjeta.img} alt="img" loading="lazy" />
                                        </a>
                                        <div className="homeblog-info">
                                            <a href={tarjeta.href}>
                                                <h3 className="homeblog-title">{tarjeta.titulo}</h3>
                                            </a>
                                            <p>{tarjeta.descripcion}</p>
                                            <a href={tarjeta.href} className="homeblog-btn">
                                                Leer más
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>
                    <div className="homeblog-caja-derecha">
                        <aside className="homeblog-categorias">
                            <h2>Categorías</h2>
                            {categorias.map((categoria) => (
                                <p
                                    key={categoria}
                                    className={selectedCategory === categoria ? "homeblog-principal" : ""}
                                    data-categ={categoria}
                                    onClick={(event) => handleCategoryClick(event, categoria)}
                                >
                                    {categoria}
                                </p>
                            ))}
                        </aside>
                        <aside className="homeblog-about">
                            <a href="/nosotros">
                                <h2>Nosotros</h2>
                            </a>
                            <p>
                                Inkoria Books empezo en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir historias...
                            </p>
                        </aside>
                        <aside className="homeblog-submenu">
                            <h2>Post recientes</h2>
                            {postRecientes.map((post, index) => (
                                <a key={index} href={post.href}>
                                    <p>{post.titulo}</p>
                                </a>
                            ))}
                        </aside>
                    </div>
                </div>
            </main>
            <div className="homeblog-paginas">
                <a className="numero1" href="">
                    <div id="homeblog-num1">1</div>
                </a>
            </div>
        </div>
    );
}

export default HomeBlog;
