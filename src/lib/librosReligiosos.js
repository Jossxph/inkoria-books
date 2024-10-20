const librosReligionEspiritualidad = [
    {
        id: "re01",
        titulo: "El libro de la vida: Una introducción a la religión comparada",
        autor: "Huston Smith",
        genero: "Religión comparada",
        anio: 1991,
        descripcion: "Una exploración profunda de las principales religiones del mundo y sus enseñanzas.",
        precio: 30.00,
        stock: 20,
        editorial: "HarperOne",
        isbn: "978-0-06-250811-2",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/32/ef/32efea5809f803aa7ba73e2131103cf3.jpg"
    },
    {
        id: "re02",
        titulo: "La Biblia",
        autor: "Varios autores",
        genero: "Cristianismo",
        anio: -100,  
        descripcion: "El texto sagrado del cristianismo, que incluye el Antiguo y el Nuevo Testamento.",
        precio: 25.00,
        stock: 50,
        editorial: "Sociedad Bíblica",
        isbn: "978-1-60039-476-1",
        portada: "https://libreriasalesiana.pe/wp-content/uploads/2022/12/La-Biblia-del-Pueblo-de-Dios.webp"
    },
    {
        id: "re03",
        titulo: "El corazón del budismo",
        autor: "Thich Nhat Hanh",
        genero: "Budismo",
        anio: 1996,
        descripcion: "Un libro que presenta la esencia del budismo y su aplicación en la vida diaria.",
        precio: 22.00,
        stock: 30,
        editorial: "Riverhead Books",
        isbn: "978-1-59463-493-1",
        portada: "https://libreriasalesiana.pe/wp-content/uploads/2022/12/La-Biblia-del-Pueblo-de-Dios.webp"
    },
    {
        id: "re04",
        titulo: "El poder del ahora",
        autor: "Eckhart Tolle",
        genero: "Espiritualidad y misticismo",
        anio: 1997,
        descripcion: "Una guía para la transformación personal y la iluminación a través de la conciencia del momento presente.",
        precio: 18.00,
        stock: 25,
        editorial: "New World Library",
        isbn: "978-1-57731-348-6",
        portada: "https://www.crisol.com.pe/media/catalog/product/cache/f6d2c62455a42b0d712f6c919e880845/9/7/9786124463013_dkfeqp7xwyt7qlep.jpg"
    },
    {
        id: "re05",
        titulo: "El camino del artista",
        autor: "Julia Cameron",
        genero: "Autoayuda espiritual",
        anio: 1992,
        descripcion: "Un libro que ofrece un programa de recuperación para aquellos que desean explorar su creatividad.",
        precio: 20.00,
        stock: 15,
        editorial: "TarcherPerigee",
        isbn: "978-1-58542-215-7",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/f2/ba/f2ba6561e5e1bddfae3426a35744f8ff.jpg"
    }
];

function contarLibros() {
    console.log(`Total de libros de la categoría Educativa: ${librosReligionEspiritualidad.length}`);
}

contarLibros();

export default librosReligionEspiritualidad;
