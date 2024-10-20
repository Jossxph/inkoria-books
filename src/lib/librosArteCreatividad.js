const librosArteCreatividad = [
    {
        id: "AC001",
        titulo: "Fotografía Digital para Principiantes",
        autor: "Sara Gómez",
        genero: "Fotografía",
        anio: 2022,
        descripcion: "Guía completa para iniciarse en la fotografía digital, con técnicas y trucos.",
        precio: 35.00,
        stock: 25,
        editorial: "Editorial Fotografía",
        isbn: "978-3-16-148423-0",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uJwW0Os5Mb-tDuwKBBYTdv4p_1qFd6W9og&s"
    },
    {
        id: "AC002",
        titulo: "Técnicas de Pintura y Dibujo",
        autor: "Roberto Díaz",
        genero: "Pintura y dibujo",
        anio: 2021,
        descripcion: "Libro que explora diversas técnicas de pintura y dibujo, desde lo básico hasta lo avanzado.",
        precio: 40.00,
        stock: 15,
        editorial: "Editorial Arte",
        isbn: "978-3-16-148424-7",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/be/8a/be8a74c9fe69ea1cc40e34b10895f4d3.jpg"
    },
    {
        id: "AC003",
        titulo: "Teoría Musical para Principiantes",
        autor: "María López",
        genero: "Música",
        anio: 2019,
        descripcion: "Manual introductorio sobre teoría musical, con ejercicios y ejemplos prácticos.",
        precio: 30.00,
        stock: 20,
        editorial: "Editorial Música",
        isbn: "978-3-16-148425-4",
        portada: "https://imgv2-1-f.scribdassets.com/img/word_document/282723941/original/481fcd8d1e/1727075146?v=1"
    },
    {
        id: "AC004",
        titulo: "Historia del Cine y Teatro",
        autor: "Carlos Méndez",
        genero: "Cine y teatro",
        anio: 2023,
        descripcion: "Exploración de la evolución del cine y el teatro a lo largo de la historia.",
        precio: 45.00,
        stock: 10,
        editorial: "Editorial Escénica",
        isbn: "978-3-16-148426-1",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNx1THWggVL9gG0f2IZe5tvXeZu19Bpnm_Q&s"
    },
    {
        id: "AC005",
        titulo: "Fundamentos del Diseño Gráfico",
        autor: "Ana Martínez",
        genero: "Diseño gráfico",
        anio: 2020,
        descripcion: "Introducción a los principios y técnicas del diseño gráfico moderno.",
        precio: 38.00,
        stock: 18,
        editorial: "Editorial Diseño",
        isbn: "978-3-16-148427-8",
        portada: "https://storage-aws-production.publica.la/universidad-tecnica-particular-de-loja-1601397551/issues/2020/10/XX61jLdVXIJMGFUW/1603219370_cover.jpg"
    },
    {
        id: "AC006",
        titulo: "Arquitectura Moderna y Sostenibilidad",
        autor: "Luis García",
        genero: "Arquitectura",
        anio: 2018,
        descripcion: "Libro que analiza la evolución de la arquitectura moderna y las prácticas sostenibles.",
        precio: 50.00,
        stock: 12,
        editorial: "Editorial Arquitectura",
        isbn: "978-3-16-148428-5",
        portada: "https://www.arcadiamediatica.com/imagenes/9786123/978612317918.GIF"
    }
];

function contarLibros() {
    console.log(`Total de libros de la categoría Arte y Creatividad: ${librosArteCreatividad.length}`);
}

contarLibros();

export default librosArteCreatividad;
