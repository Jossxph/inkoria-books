const librosEducativos = [
    {
        id: "eed01",
        titulo: "Matemáticas para Secundaria",
        autor: "Carlos Martínez",
        genero: "Matemáticas",
        anio: 2021, // Changed to a number
        descripcion: "Un libro que cubre los fundamentos de matemáticas para nivel secundario.",
        precio: 30.00, // Changed to a number
        stock: 20, // Changed to a number
        editorial: "Editorial Educación",
        isbn: "978-3-16-148412-4",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7t90tAUUVP8UcOTSbLnoBVyfmxdpFuQFCg&s"
    },
    {
        id: "eed02",
        titulo: "Ciencias Naturales en la Vida Diaria",
        autor: "Ana Gómez",
        genero: "Ciencias naturales",
        anio: 2019, // Changed to a number
        descripcion: "Exploración de la biología, química y física en situaciones cotidianas.",
        precio: 35.00, // Changed to a number
        stock: 15, // Changed to a number
        editorial: "Editorial Científica",
        isbn: "978-3-16-148415-5",
        portada: "https://imgx.udocz.com/1363x0/documents_html/568606-d6c043fdc4b9e79ccf0b22c502c1abe8/bg1.jpg"
    },
    {
        id: "eed03",
        titulo: "Historia del Mundo",
        autor: "María Rodríguez",
        genero: "Ciencias sociales",
        anio: 2018, // Changed to a number
        descripcion: "Una revisión completa de los eventos históricos más importantes.",
        precio: 40.00, // Changed to a number
        stock: 25, // Changed to a number
        editorial: "Editorial Historia",
        isbn: "978-3-16-148416-2",
        portada: "https://www.lavanguardia.com/libros/images/thumbnails/0/0/9788412698077-thumbnail.jpg?v=1"
    },
    {
        id: "eed04",
        titulo: "Manual Técnico de Electrónica",
        autor: "Luis Hernández",
        genero: "Manuales técnicos",
        anio: 2022, // Changed to a number
        descripcion: "Guía completa para aprender los fundamentos de la electrónica.",
        precio: 60.00, // Changed to a number
        stock: 12, // Changed to a number
        editorial: "Editorial Técnica",
        isbn: "978-3-16-148417-9",
        portada: "https://www.lavanguardia.com/libros/images/thumbnails/0/0/9788412698077-thumbnail.jpg?v=1"
    },
    {
        id: "eed05",
        titulo: "Programación en Python",
        autor: "John Doe",
        genero: "Programación",
        anio: 2023,
        descripcion: "Curso completo de programación en Python, con ejemplos prácticos.",
        precio: 55.00,
        stock: 18, 
        editorial: "Editorial Programación",
        isbn: "978-3-16-148418-6",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/d0/07/d00745b45b7c4ab809d74d435c0b566e.jpg"
    },
    {
        id: "eed06",
        titulo: "Educación Financiera para Jóvenes",
        autor: "Laura Pérez",
        genero: "Educación financiera",
        anio: 2020,
        descripcion: "Guía para aprender a gestionar el dinero desde una edad temprana.",
        precio: 25.00, 
        stock: 20, 
        editorial: "Editorial Finanzas",
        isbn: "978-3-16-148419-3",
        portada: "https://img.yumpu.com/66614267/1/500x640/revista-est-numero-67.jpg"
    },
    {
        id: "eed07",
        titulo: "Inglés Básico para Principiantes",
        autor: "John Smith",
        genero: "Idiomas",
        anio: 2020,
        descripcion: "Curso básico de inglés para principiantes, con ejercicios prácticos.",
        precio: 25.00,
        stock: 30, 
        editorial: "Editorial Lingüística",
        isbn: "978-3-16-148414-8",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/b0/d7/b0d76991385a4810f38c460ba329e0dd.jpg"
    },
    {
        id: "eed08",
        titulo: "El Arte del Dibujo",
        autor: "Carlos Ruiz",
        genero: "Arte y Creatividad",
        anio: 2017,
        descripcion: "Técnicas básicas y avanzadas para desarrollar habilidades de dibujo.",
        precio: 28.00, 
        stock: 14, 
        editorial: "Editorial Artística",
        isbn: "978-3-16-148420-9",
        portada: "https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/5e456f274c41502158c9e37033bf74d8/thumb_1200_1697.png"
    },
    {
        id: "eed09",
        titulo: "Química Orgánica para Secundaria",
        autor: "Marta Sánchez",
        genero: "Ciencias naturales",
        anio: 2021, 
        descripcion: "Introducción a la química orgánica para estudiantes de secundaria.",
        precio: 32.00,
        stock: 17,
        editorial: "Editorial Científica",
        isbn: "978-3-16-148421-6",
        portada: "https://static.docsity.com/documents_first_pages/2022/10/10/7d9e15de6fe2d173edacadf966925dbb.png"
    },
    {
        id: "eed10",
        titulo: "Lengua y Literatura para Primaria",
        autor: "Lucía Fernández",
        genero: "Textos escolares",
        anio: 2019, 
        descripcion: "Libro de texto para el aprendizaje de lengua y literatura en primaria.",
        precio: 20.00, 
        stock: 40, 
        editorial: "Editorial Escolar",
        isbn: "978-3-16-148422-3",
        portada: "https://cdn.slidesharecdn.com/ss_thumbnails/plandelecturagrupal1-170106125015-thumbnail.jpg?width=560&fit=bounds"
    }
];

function contarLibros() {
    console.log(`Total de libros de la categoría Educativa: ${librosEducativos.length}`);
}

contarLibros();

export default librosEducativos;
