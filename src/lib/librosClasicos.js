const librosClasicos = [
    {
        id: "CLA001",
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Literatura clásica",
        anio: 1813,
        descripcion: "Una novela que examina la naturaleza del amor, el matrimonio y la sociedad a través de la historia de Elizabeth Bennet y su relación con el orgulloso Sr. Darcy.",
        precio: 10.99,
        stock: 60,
        editorial: "T. Egerton",
        isbn: "9780141439518",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/46/6b/466b0b47e932561b186c56358acbe55e.jpg"
    },
    {
        id: "CLA002",
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Literatura clásica",
        anio: 1967,
        descripcion: "La historia de la familia Buendía en el pueblo ficticio de Macondo, explorando temas de soledad, amor y destino.",
        precio: 12.50,
        stock: 35,
        editorial: "Editorial Sudamericana",
        isbn: "9780307474728",
        portada: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg"
    },
    {
        id: "CLA003",
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Literatura clásica",
        anio: 1605,
        descripcion: "Las aventuras de un hidalgo que pierde la cordura y decide convertirse en caballero andante, acompañado de su fiel escudero Sancho Panza.",
        precio: 14.99,
        stock: 40,
        editorial: "Francisco de Robles",
        isbn: "9788491050511",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/73/b6/73b6fd96c31d26e2b6a3531808c1188c.jpg"
    },
    {
        id: "CLA004",
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Mitología",
        anio: 1200,
        descripcion: "La épica aventura de Odiseo (Ulises) en su regreso a Ítaca tras la Guerra de Troya, enfrentándose a múltiples desafíos y criaturas mitológicas.",
        precio: 11.50,
        stock: 20,
        editorial: "Varios",
        isbn: "9788499445384",
        portada: "https://tavapy.gov.py/biblioteca/wp-content/uploads/2022/04/page_1-1.jpg"
    },
    {
        id: "CLA005",
        titulo: "Hamlet",
        autor: "William Shakespeare",
        genero: "Teatro",
        anio: 1603,
        descripcion: "Una tragedia que narra la historia del príncipe Hamlet, quien busca venganza contra su tío, que ha asesinado a su padre y usurpado el trono.",
        precio: 9.99,
        stock: 50,
        editorial: "Varios",
        isbn: "9780521735378",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/5a/fe/5afe8ab93c03ad42d54fe921a55625d2.jpg"
    },
    {
        id: "CLA006",
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Literatura clásica",
        anio: 1925,
        descripcion: "Una crítica social de la era del jazz, centrada en la vida de Jay Gatsby y su amor por Daisy Buchanan.",
        precio: 13.99,
        stock: 30,
        editorial: "Charles Scribner's Sons",
        isbn: "9780743273565",
        portada: "https://www.anagrama-ed.es/uploads/media/portadas/0001/15/b2834bc4ea71357c8b549dfccdd16d611c6586ea.jpeg"
    },
    {
        id: "CLA007",
        titulo: "Moby Dick",
        autor: "Herman Melville",
        genero: "Literatura clásica",
        anio: 1851,
        descripcion: "La obsesión del capitán Ahab por cazar a la ballena blanca Moby Dick, que le arruinó la vida, y sus reflexiones sobre la naturaleza humana.",
        precio: 15.00,
        stock: 25,
        editorial: "Harper & Brothers",
        isbn: "9781503280786",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/b5/89/b589be02f650868192cc4bc0c876ea31.jpg"
    },
    {
        id: "CLA008",
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Literatura clásica",
        anio: 1890,
        descripcion: "La historia de Dorian Gray, un joven cuya vida de placeres y excesos lo lleva a la perdición, mientras su retrato envejece en su lugar.",
        precio: 12.00,
        stock: 45,
        editorial: "Lippincott's Monthly Magazine",
        isbn: "9780486266840",
        portada: "https://www.planetadelibros.com.pe/usuaris/libros/fotos/383/m_libros/382805_portada_el-retrato-de-dorian-gray_oscar-wilde_202307191606.jpg"
    },
    {
        id: "CLA009",
        titulo: "Divina Comedia",
        autor: "Dante Alighieri",
        genero: "Literatura clásica",
        anio: 1320,
        descripcion: "Un poema épico que narra el viaje de Dante a través del Infierno, el Purgatorio y el Paraíso, explorando la condición humana.",
        precio: 14.99,
        stock: 12,
        editorial: "Varios",
        isbn: "9788853000028",
        portada: "https://cajamarcaopina.com/wp-content/uploads/2024/06/71WJbXGxPdL._AC_UF10001000_QL80_.jpg"
    },
    {
        id: "CLA010",
        titulo: "Las flores del mal",
        autor: "Charles Baudelaire",
        genero: "Poesía",
        anio: 1857,
        descripcion: "Una obra poética que explora la belleza y la decadencia de la vida a través de imágenes vívidas y emociones profundas.",
        precio: 9.50,
        stock: 22,
        editorial: "Leipzig",
        isbn: "9782070414015",
        portada: "https://www.alianzaeditorial.es/imagenes/libros/grande/9788413628868-las-flores-del-mal.jpg"
    }
];

function contarLibros() {
    console.log(`Total de libros de la categoria Clasicos: ${librosClasicos.length}`);
}

contarLibros();

export default librosClasicos;



