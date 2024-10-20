const librosJuvenil = [
    {
        id: "JUV001",
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía juvenil",
        anio: 1997,
        descripcion: "El primer libro de la famosa serie que sigue las aventuras del joven mago Harry Potter en el mundo mágico de Hogwarts.",
        precio: 19.99,
        stock: 30,
        editorial: "Bloomsbury",
        isbn: "9780747532699",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg"
    },
    {
        id: "JUV002",
        titulo: "The Hunger Games",
        autor: "Suzanne Collins",
        genero: "Ciencia ficción juvenil",
        anio: 2008,
        descripcion: "En un futuro distópico, Katniss Everdeen se ofrece como tributo para salvar a su hermana en los despiadados Juegos del Hambre.",
        precio: 15.99,
        stock: 25,
        editorial: "Scholastic",
        isbn: "9780439023528",
        portada: "https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: "JUV003",
        titulo: "Sherlock Holmes: El misterio del reloj perezoso",
        autor: "M. G. Leonard",
        genero: "Misterio juvenil",
        anio: 2018,
        descripcion: "Una nueva aventura de Sherlock Holmes que sigue a un joven detective mientras resuelve un misterio en Londres.",
        precio: 12.99,
        stock: 18,
        editorial: "HarperCollins",
        isbn: "9780008269491",
        portada: "https://www.duomoediciones.com/wp-content/uploads/2022/06/Clue2_Elmisteriodelreloj-WEB-Publisher-low-res.jpg"
    },
    {
        id: "JUV004",
        titulo: "To All the Boys I've Loved Before",
        autor: "Jenny Han",
        genero: "Romance juvenil",
        anio: 2014,
        descripcion: "Lara Jean guarda cartas de amor en secreto, hasta que un día, son enviadas a todos sus destinatarios, lo que cambia su vida amorosa para siempre.",
        precio: 14.99,
        stock: 22,
        editorial: "Simon & Schuster",
        isbn: "9781442426702",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/5c/62/5c6293e98ba229b78efcbf74e8eb5f3a.jpg"
    },
    {
        id: "JUV005",
        titulo: "The Maze Runner",
        autor: "James Dashner",
        genero: "Distopía",
        anio: 2009,
        descripcion: "Thomas se despierta en un laberinto sin recordar quién es, junto a otros jóvenes que también han sido atrapados. Juntos deben encontrar una salida y descubrir la verdad.",
        precio: 16.50,
        stock: 20,
        editorial: "Delacorte Press",
        isbn: "9780385737951",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/45/de/45deadaaf20e3fbca58bfeda3df98e6b.jpg"
    },
    {
        id: "JUV006",
        titulo: "Percy Jackson y el ladrón del rayo",
        autor: "Rick Riordan",
        genero: "Aventuras",
        anio: 2005,
        descripcion: "Percy Jackson, un semidiós, descubre su identidad y se embarca en una misión para recuperar el rayo de Zeus y evitar una guerra entre los dioses.",
        precio: 17.99,
        stock: 15,
        editorial: "Disney-Hyperion",
        isbn: "9780786838653",
        portada: "https://www.penguinlibros.com/pe/3008287-large_default/el-ladron-del-rayo-percy-jackson-y-los-dioses-del-olimpo-1.webp"
    },
    {
        id: "JUV007",
        titulo: "Cinder",
        autor: "Marissa Meyer",
        genero: "Fantasía juvenil",
        anio: 2012,
        descripcion: "Una reinvención de la historia de Cenicienta ambientada en un mundo futurista donde los humanos coexisten con androides y letales criaturas.",
        precio: 16.99,
        stock: 10,
        editorial: "Feiwel & Friends",
        isbn: "9781250007209",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/6c/06/6c06343a4182781b67e2a98b5fd053d7.jpg"
    },
    {
        id: "JUV008",
        titulo: "Ready Player One",
        autor: "Ernest Cline",
        genero: "Ciencia ficción juvenil",
        anio: 2011,
        descripcion: "En un futuro distópico, Wade Watts se embarca en una caza del tesoro dentro de un universo virtual para encontrar el legado del creador y salvar su vida.",
        precio: 18.99,
        stock: 12,
        editorial: "Crown Publishing Group",
        isbn: "9780307887436",
        portada: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500930947i/9969571.jpg"
    },
    {
        id: "JUV009",
        titulo: "One of Us Is Lying",
        autor: "Karen M. McManus",
        genero: "Misterio juvenil",
        anio: 2017,
        descripcion: "Cinco estudiantes entran a la sala de detención, pero solo cuatro salen. Un misterio de asesinato se desarrolla, revelando secretos oscuros entre ellos.",
        precio: 15.99,
        stock: 14,
        editorial: "Delacorte Press",
        isbn: "9780440819133",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/99/87/9987fcd311f48cf1a7bb85af7608f4fc.jpg"
    },
    {
        id: "JUV010",
        titulo: "The Fault in Our Stars",
        autor: "John Green",
        genero: "Romance juvenil",
        anio: 2012,
        descripcion: "Una hermosa historia de amor entre dos adolescentes con cáncer que encuentran la felicidad y el significado de la vida a pesar de sus circunstancias.",
        precio: 14.50,
        stock: 19,
        editorial: "Dutton Books",
        isbn: "9780525478812",
        portada: "https://pictures.abebooks.com/inventory/30695249211.jpg"
    }
];

function contarLibros() {
    console.log(`Total de libros de la categoria Juvenil: ${librosJuvenil.length}`);
}

contarLibros();

export default librosJuvenil;
