const librosInfantil = [
    {
        id: "INF001",
        titulo: "Cenicienta",
        autor: "Charles Perrault",
        genero: "Cuentos clásicos",
        anio: 1697,
        descripcion: "La mágica historia de una joven maltratada que, con la ayuda de su hada madrina, asiste a un baile real y conquista el corazón del príncipe.",
        precio: 9.99,
        stock: 50,
        editorial: "Cuentos de la infancia",
        isbn: "9788434222057",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/c1/6f/c16f1755500f5b10c72d69f8ab0b7a76.jpg"
    },
    {
        id: "INF002",
        titulo: "El monstruo de colores",
        autor: "Anna Llenas",
        genero: "Libros ilustrados",
        anio: 2012,
        descripcion: "Un divertido libro que ayuda a los niños a comprender y expresar sus emociones a través de un monstruo de colores.",
        precio: 12.50,
        stock: 30,
        editorial: "Flamboyant",
        isbn: "9788416074228",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/53/86/5386e371c14e4177bcf936b22a4db825.jpg"
    },
    {
        id: "INF003",
        titulo: "La oruga muy hambrienta",
        autor: "Eric Carle",
        genero: "Cuentos clásicos",
        anio: 1969,
        descripcion: "La historia de una pequeña oruga que, tras comer una variedad de alimentos, se convierte en una hermosa mariposa.",
        precio: 10.99,
        stock: 45,
        editorial: "HarperCollins",
        isbn: "9780064434502",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/1e/29/1e2959ba175c6adbea251cf8573fbd2f.jpg"
    },
    {
        id: "INF004",
        titulo: "El lobo y los siete cabritillos",
        autor: "Los hermanos Grimm",
        genero: "Fábulas y leyendas",
        anio: 1812,
        descripcion: "Un clásico cuento que narra cómo un astuto lobo intenta engañar a siete cabritillos, quienes deben ser más inteligentes que él.",
        precio: 8.99,
        stock: 40,
        editorial: "Cuentos de la infancia",
        isbn: "9788434232880",
        portada: "https://www.curriculumnacional.cl/614/articles-83736_thumbnail.thumb_iNormal.jpg"
    },
    {
        id: "INF005",
        titulo: "Las aventuras de Pinocho",
        autor: "Carlo Collodi",
        genero: "Aventuras infantiles",
        anio: 1883,
        descripcion: "Las emocionantes peripecias de un muñeco de madera que sueña con convertirse en un niño de verdad.",
        precio: 11.50,
        stock: 25,
        editorial: "Cuento de los clásicos",
        isbn: "9788491011253",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/f7/2e/f72eda15b6d0c9a867eeed469070052b.jpg"
    },
    {
        id: "INF006",
        titulo: "Matilda",
        autor: "Roald Dahl",
        genero: "Aventuras infantiles",
        anio: 1988,
        descripcion: "La historia de una niña extraordinaria con poderes especiales que se enfrenta a la cruel directora de su escuela.",
        precio: 15.99,
        stock: 20,
        editorial: "Puffin Books",
        isbn: "9780142410370",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/a4/f8/a4f812099b7904408748ee98915dcb0e.jpg"
    },
    {
        id: "INF007",
        titulo: "Donde viven los monstruos",
        autor: "Maurice Sendak",
        genero: "Cuentos clásicos",
        anio: 1963,
        descripcion: "Max, un niño travieso, navega a una isla habitada por monstruos donde se convierte en rey de los monstruos.",
        precio: 13.99,
        stock: 15,
        editorial: "HarperCollins",
        isbn: "9780060254926",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/b2/0d/b20df0dc720f5368e402112c08ea897f.jpg"
    },
    {
        id: "INF008",
        titulo: "El pequeño príncipe",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fábulas y leyendas",
        anio: 1943,
        descripcion: "Una conmovedora historia sobre un joven príncipe que viaja a diferentes planetas y aprende sobre la amistad y la soledad.",
        precio: 14.50,
        stock: 10,
        editorial: "Reynal & Hitchcock",
        isbn: "9780156012195",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/f4/bc/f4bc25288107cfebe6a9cbc1e245c00a.jpg"
    },
    {
        id: "INF009",
        titulo: "Alicia en el país de las maravillas",
        autor: "Lewis Carroll",
        genero: "Aventuras infantiles",
        anio: 1865,
        descripcion: "Las sorprendentes aventuras de Alicia, una niña que cae por un agujero de conejo y entra en un mundo lleno de criaturas fantásticas.",
        precio: 12.99,
        stock: 8,
        editorial: "Macmillan",
        isbn: "9781503219663",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/69/75/69754b64c3f7a505908b6c9d1b8000a7.jpg"
    },
    {
        id: "INF010",
        titulo: "Las crónicas de Narnia: El león, la bruja y el armario",
        autor: "C.S. Lewis",
        genero: "Aventuras infantiles",
        anio: 1950,
        descripcion: "Cuatro hermanos descubren un armario que los lleva al mágico mundo de Narnia, donde deben ayudar a un león a derrotar a la malvada bruja.",
        precio: 16.50,
        stock: 18,
        editorial: "Geoffrey Bles",
        isbn: "9780064404990",
        portada: "https://www.planetadelibros.com/usuaris/libros/thumbs/914e9abb-64ba-458c-9556-e0f5f43e7fef/d_1200_1200/portada_el-leon-la-bruja-y-el-armario_c-s-lewis_201505260935.webp"
    }
];


function contarLibros() {
    console.log(`Total de libros de la categoria Infantil: ${librosInfantil.length}`);
}

contarLibros();

export default librosInfantil;

