import "../css/nosotros.css"; // Asegúrate de que la ruta sea correcta

const About = () => {
    return (
        <div className="about-container">
            <div className="about-banner">
                <h1>SOBRE NOSOTROS</h1>
            </div>

            {/* Primer contenedor: Historia y equipo */}
            <div className="about-container1">
                <section className="about-history">
                    <div className="about-history-content">
                        <div className="about-history-text">
                            <h2 className="about-title">Nuestro Comienzo</h2>
                            <p>
                                Inkoria Books empezó en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir historias. Comenzamos con una modesta selección de títulos, desde los clásicos hasta las últimas novedades, pero lo que nos distinguió desde el principio fue nuestro compromiso con cada lector que cruzaba nuestra puerta. Creíamos, y aún lo hacemos, que cada libro tiene un lector esperando por él, y nuestro trabajo es hacer que se encuentren.
                                <br /><br />
                                Con el tiempo, ampliamos nuestra colección para incluir libros de autores locales, géneros poco comunes y obras en varios idiomas. Creamos un rincón especial para los niños, lleno de coloridas historias para inspirar a los más jóvenes, y organizamos eventos donde escritores y lectores pudieran compartir experiencias.
                                <br /><br />
                                Hoy, nuestro negocio sigue fiel a su esencia: ser un lugar de encuentro para los amantes de los libros. Inkoria Books es mucho más que una librería, es un refugio para aquellos que buscan descubrir nuevas ideas, revivir viejos recuerdos o simplemente disfrutar del placer de una buena lectura.
                            </p>
                        </div>
                        <div className="about-history-image">
                            <img src="../../src/assets/img/backgrounds/tienda.jpg" alt="foto de la tienda" />
                        </div>
                    </div>
                </section>

                <section className="about-team">
                    <p className="about-title">Equipo de trabajo</p>
                    <div className="about-team-list">
                        {[
                            {
                                name: "Abigail Romero",
                                role: "Fundadora",
                                bio: "Docente de literatura, desde muy joven, mostró una gran pasión por la lectura, sumergiéndose en clásicos de la literatura y obras de ciencia ficción que despertaron su imaginación.",
                                imgSrc: "https://media-public.canva.com/MADpukA-aDc/1/thumbnail_large.png",
                            },
                            {
                                name: "Joseph Inga",
                                role: "Fundador",
                                bio: "Escritor, creció en una familia de maestros donde los libros eran parte fundamental de su vida diaria. Su pasión por la diversidad literaria fue uno de los principales motores para fundar BookStore.",
                                imgSrc: "https://media-public.canva.com/edE6g/MAFc6eedE6g/1/tl.png",
                            },
                            {
                                name: "Ailyn Gamarra",
                                role: "Directora Comercial",
                                bio: "Estudió Administración de empresas, en su tiempo libre le gusta leer libros, por lo que decidió unir fuerzas con Danna y Luis para aportar su conocimiento en gestión y ventas, ayudando a estructurar el negocio.",
                                imgSrc: "https://media-public.canva.com/C2C40/MAFlP9C2C40/1/tl.png",
                            },
                            {
                                name: "Alex Herbas",
                                role: "Director de Tecnología",
                                bio: "Apasionado por la tecnología y la automatización de procesos, Manuel se unió a BookStore para optimizar las operaciones tecnológicas y desarrollar una mejor experiencia de usuario en la tienda en línea.",
                                imgSrc: "https://media-public.canva.com/A6bH8/MAFqfqA6bH8/1/tl.png",
                            },
                            {
                                name: "Diana Quispe",
                                role: "Directora de Marketing",
                                bio: "Con amplia experiencia en marketing digital, Carla ha trabajado con varias startups, ayudando a crear estrategias de marketing efectivas. Ahora aporta su experiencia para posicionar a BookStore en el mercado.",
                                imgSrc: "https://media-public.canva.com/usTPg/MAFc6RusTPg/1/tl.png",
                            }

                        ].map((member, index) => (
                            <div className="about-team-member" key={index}>
                                <img src={member.imgSrc} alt={member.name} />
                                <div className="about-member-info">
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                    <p className="about-member-bio">{member.bio}</p>
                                    <div className="about-member-icons">
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Segundo contenedor: Principios y valores */}
            <div className="about-container2">
                <section className="about-principles">
                    <p className="about-title">Nuestros principios</p>
                    <div className="about-goals">
                        {[
                            {
                                title: "Visión",
                                description: "Nuestra visión es llegar a ser una de las librerías preferidas de los peruanos, un lugar donde los lectores de todas las edades encuentren inspiración, conocimiento y nuevas perspectivas.",
                                icon: "fa-eye",
                                className: "about-goal-vision",
                            },
                            {
                                title: "Misión",
                                description: "La misión de BookStore es fomentar la creatividad, la curiosidad y el amor por la lectura, mientras apoyamos a autores emergentes y editoriales independientes.",
                                icon: "fa-rocket",
                                className: "about-goal-mission",
                            },
                        ].map((goal, index) => (
                            <div className={`about-goal ${goal.className}`} key={index}>
                                <i className={`fas ${goal.icon}`}></i>
                                <div className="about-goal-description">
                                    <h2>{goal.title}</h2>
                                    <p>{goal.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="about-subtitle">Valores</p>
                    <div className="about-values">
                        {[
                            {
                                title: "Compromiso con la comunidad",
                                description: "Apoyamos a nuestra comunidad local organizando eventos culturales, promoviendo autores locales y trabajando en colaboración con escuelas y bibliotecas.",
                                icon: "fa-hands-helping",
                            },
                            {
                                title: "Diversidad e Inclusión",
                                description: "Nos comprometemos a ofrecer una selección diversa de libros que representen diferentes culturas, voces y perspectivas, y a ser un espacio inclusivo para todos los lectores.",
                                icon: "fa-handshake",
                            },
                            {
                                title: "Sostenibilidad y Responsabilidad Social",
                                description: "Nos esforzamos por reducir nuestro impacto ambiental, apoyando a editoriales responsables y promoviendo el intercambio de libros de segunda mano.",
                                icon: "fa-leaf",
                            },
                        ].map((value, index) => (
                            <div className="about-value" key={index}>
                                <i className={`fas ${value.icon}`}></i>
                                <div className="about-value-description">
                                    <h2>{value.title}</h2>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
