const librosNoFiccion = [
    {
        id: "NF001",
        titulo: "Becoming",
        autor: "Michelle Obama",
        genero: "Biografías y memorias",
        anio: 2018,
        descripcion: "La ex primera dama de los Estados Unidos comparte su historia, desde sus humildes comienzos en Chicago hasta su papel en la Casa Blanca, y ofrece reflexiones sobre la vida, la familia y la lucha por la igualdad.",
        precio: 24.99,
        stock: 15,
        editorial: "Crown Publishing Group",
        isbn: "9781524763138",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/1d/2a/1d2a0c3cf28a4f3fdea78426ce64eab7.jpg"
    },
    {
        id: "NF002",
        titulo: "El poder del ahora",
        autor: "Eckhart Tolle",
        genero: "Autoayuda y desarrollo personal",
        anio: 1997,
        descripcion: "Un guía espiritual que enseña cómo liberarse del pensamiento negativo y vivir plenamente en el presente, descubriendo la paz interior y la iluminación.",
        precio: 18.99,
        stock: 20,
        editorial: "New World Library",
        isbn: "9781577314806",
        portada: "https://www.crisol.com.pe/media/catalog/product/cache/f6d2c62455a42b0d712f6c919e880845/9/7/9786124463013_dkfeqp7xwyt7qlep.jpg"
    },
    {
        id: "NF003",
        titulo: "Sapiens: De animales a dioses",
        autor: "Yuval Noah Harari",
        genero: "Ensayos",
        anio: 2014,
        descripcion: "Una exploración de la historia de la humanidad, desde los primeros Homo sapiens hasta el presente, analizando cómo nuestras creencias, culturas y tecnología han moldeado nuestro mundo.",
        precio: 19.99,
        stock: 10,
        editorial: "Harvill Secker",
        isbn: "9780099590088",
        portada: "https://www.penguinlibros.com/pe/1675383/sapiens-de-animales-a-dioses.jpg"
    },
    {
        id: "NF004",
        titulo: "Guns, Germs, and Steel",
        autor: "Jared Diamond",
        genero: "Historia",
        anio: 1997,
        descripcion: "Una historia de la humanidad que explica cómo las diferencias en la geografía y la disponibilidad de recursos han influido en el desarrollo de civilizaciones a lo largo de la historia.",
        precio: 22.50,
        stock: 8,
        editorial: "W. W. Norton & Company",
        isbn: "9780393037004",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/71/7f/717fec097e0cbb34d19192abd044357c.jpg"
    },
    {
        id: "NF005",
        titulo: "Meditaciones",
        autor: "Marco Aurelio",
        genero: "Filosofía",
        anio: 180,
        descripcion: "Una colección de pensamientos y reflexiones del emperador romano Marco Aurelio sobre la vida, la moral y la filosofía estoica.",
        precio: 14.99,
        stock: 18,
        editorial: "HarperOne",
        isbn: "9780061791059",
        portada: "https://http2.mlstatic.com/D_NQ_NP_717162-MLU52524872567_112022-O.webp"
    },
    {
        id: "NF006",
        titulo: "La política",
        autor: "Aristóteles",
        genero: "Política y sociedad",
        anio: 350,
        descripcion: "Una de las obras más influyentes de la filosofía política, donde Aristóteles analiza la naturaleza del estado y la mejor forma de gobierno.",
        precio: 12.99,
        stock: 25,
        editorial: "Cambridge University Press",
        isbn: "9780521484160",
        portada: "https://www.elvirrey.com/imagenes/9788416/978841677537.GIF"
    },
    {
        id: "NF007",
        titulo: "Capital en el siglo XXI",
        autor: "Thomas Piketty",
        genero: "Economía y negocios",
        anio: 2013,
        descripcion: "Un análisis exhaustivo de la desigualdad económica a lo largo de los siglos, con un enfoque en la distribución del capital y su impacto en la sociedad moderna.",
        precio: 28.50,
        stock: 5,
        editorial: "Harvard University Press",
        isbn: "9780674979857",
        portada: "https://bookvivant.com/cdn/shop/products/BOOVI-6689_9786071627551_933c1178-a967-43ab-9a44-875213bfacff.jpg?v=1696378066"
    },
    {
        id: "NF008",
        titulo: "Astrophysics for People in a Hurry",
        autor: "Neil deGrasse Tyson",
        genero: "Ciencia y tecnología",
        anio: 2017,
        descripcion: "Una introducción accesible y rápida a la astrofísica, cubriendo temas como el Big Bang, los agujeros negros y la búsqueda de vida extraterrestre.",
        precio: 16.99,
        stock: 12,
        editorial: "W.W. Norton & Company",
        isbn: "9780393609394",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/6d/4c/6d4c224fe554a31a99ef8b8619a6addf.jpg"
    },
    {
        id: "NF009",
        titulo: "Thinking, Fast and Slow",
        autor: "Daniel Kahneman",
        genero: "Psicología",
        anio: 2011,
        descripcion: "El psicólogo Nobel Daniel Kahneman explora los dos sistemas de pensamiento que moldean nuestras decisiones: el pensamiento rápido e intuitivo y el pensamiento lento y deliberado.",
        precio: 19.99,
        stock: 14,
        editorial: "Farrar, Straus and Giroux",
        isbn: "9780374533557",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/12/5d/125d2628c8e940bf066d5c91c0df18a8.jpg"
    },
    {
        id: "NF010",
        titulo: "How Not to Die",
        autor: "Michael Greger",
        genero: "Salud y bienestar",
        anio: 2015,
        descripcion: "Un enfoque basado en la ciencia sobre cómo ciertos cambios en la dieta pueden prevenir y revertir enfermedades crónicas, ofreciendo consejos prácticos para mejorar la salud.",
        precio: 24.99,
        stock: 9,
        editorial: "Flatiron Books",
        isbn: "9781250066115",
        portada: "https://m.media-amazon.com/images/I/81RvGjUWqlL.jpg"
    }
];



function contarLibros() {
    console.log(`Total de libros en No Ficcion: ${librosNoFiccion.length}`);
}

contarLibros();

export default librosNoFiccion;
