const librosCulturaSociedad = [
    {
        id: "cs01",
        titulo: "El segundo sexo",
        autor: "Simone de Beauvoir",
        genero: "Feminismo",
        anio: 1949,
        descripcion: "Un análisis fundamental de la opresión de las mujeres y una de las obras más influyentes del feminismo.",
        precio: 25.00,
        stock: 20,
        editorial: "Gallimard",
        isbn: "978-2-07-036849-4",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/e4/32/e432ce135e6e8a1c6831a1e1e9254781.jpg"
    },
    {
        id: "cs02",
        titulo: "Transgender History",
        autor: "Susan Stryker",
        genero: "Diversidad e inclusión",
        anio: 2008,
        descripcion: "Un estudio sobre la historia del movimiento transgénero en los Estados Unidos y su impacto en la cultura contemporánea.",
        precio: 22.00,
        stock: 15,
        editorial: "Beacon Press",
        isbn: "978-0-8070-0469-0",
        portada: "https://m.media-amazon.com/images/I/91jd0kTF3yL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: "cs03",
        titulo: "Cultura popular en la sociedad contemporánea",
        autor: "Henry Jenkins",
        genero: "Cultura popular",
        anio: 2006,
        descripcion: "Un análisis de cómo la cultura popular se ha transformado y cómo influye en nuestras vidas.",
        precio: 30.00,
        stock: 10,
        editorial: "NYU Press",
        isbn: "978-0-8147-5843-1",
        portada: "https://www.planetadelibros.com.pe/usuaris/libros/fotos/182/m_libros/181746_34175.jpg"
    },
    {
        id: "cs04",
        titulo: "La sociología en el mundo moderno",
        autor: "Anthony Giddens",
        genero: "Sociología",
        anio: 1997,
        descripcion: "Una obra clave que explora los fundamentos de la sociología y su relevancia en la vida moderna.",
        precio: 35.00,
        stock: 12,
        editorial: "PoliPointPress",
        isbn: "978-0-8032-3675-8",
        portada: "https://treepeoplecompany.com/cdn/shop/products/Lasociologiayelmundomoderno_128x199.jpg?v=1610642209"
    },
    {
        id: "cs05",
        titulo: "La gran transformación",
        autor: "Karl Polanyi",
        genero: "Globalización",
        anio: 1944,
        descripcion: "Un análisis de cómo la economía de mercado ha transformado las sociedades modernas y sus implicaciones.",
        precio: 28.00,
        stock: 18,
        editorial: "Beacon Press",
        isbn: "978-0-8070-2200-7",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pd8g_o7jN1VWnLEYrl3jWUH6rm0P7VBy8g&s"
    }
];

function contarLibros() {
    console.log(`Total de libros de la categoría CulturaSociedad: ${librosCulturaSociedad.length}`);
}

contarLibros();

export default librosCulturaSociedad;
