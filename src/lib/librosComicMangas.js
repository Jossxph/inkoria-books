const librosComicsManga = [
    {
        id: "CM001",
        titulo: "Maus",
        autor: "Art Spiegelman",
        genero: "Novelas gráficas",
        anio: 1980,
        descripcion: "Una novela gráfica que narra la experiencia del autor sobre el Holocausto a través de la vida de su padre.",
        precio: 45.00,
        stock: 20,
        editorial: "Pantheon Books",
        isbn: "978-0-679-40641-9",
        portada: "https://www.crisol.com.pe/media/catalog/product/cache/cf84e6047db2ba7f2d5c381080c69ffe/9/7/9786073125819_j3ktbf7r4rmlptqa.jpg"
    },
    {
        id: "CM002",
        titulo: "Batman: The Dark Knight Returns",
        autor: "Frank Miller",
        genero: "Cómics de superhéroes",
        anio: 1986,
        descripcion: "Un clásico del cómic que presenta a un envejecido Batman volviendo a la acción para combatir el crimen en Gotham.",
        precio: 50.00,
        stock: 15,
        editorial: "DC Comics",
        isbn: "978-1-4012-3121-0",
        portada: "https://upload.wikimedia.org/wikipedia/en/7/77/Dark_knight_returns.jpg"
    },
    {
        id: "CM003",
        titulo: "One Piece",
        autor: "Eiichiro Oda",
        genero: "Manga shonen",
        anio: 1997,
        descripcion: "Sigue las aventuras de Monkey D. Luffy y su tripulación mientras buscan el legendario tesoro One Piece.",
        precio: 9.99,
        stock: 30,
        editorial: "Shueisha",
        isbn: "978-4-08-872509-3",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/51/d2/51d29f42b23b024685f38e75fd1d06c8.jpg"
    },
    {
        id: "CM004",
        titulo: "Nana",
        autor: "Ai Yazawa",
        genero: "Manga shojo",
        anio: 2000,
        descripcion: "Una historia que sigue la vida de dos chicas llamadas Nana que se encuentran en Tokio y forjan una amistad única.",
        precio: 12.99,
        stock: 18,
        editorial: "Shueisha",
        isbn: "978-4-08-617592-0",
        portada: "https://images.cdn1.buscalibre.com/fit-in/360x360/47/f6/47f6984fc4ba5c3695dfafffc4b8b1c8.jpg"
    },
    {
        id: "CM005",
        titulo: "Persepolis",
        autor: "Marjane Satrapi",
        genero: "Cómics independientes",
        anio: 2000,
        descripcion: "Autobiografía en forma de novela gráfica que narra la vida de la autora durante la Revolución Islámica en Irán.",
        precio: 20.00,
        stock: 25,
        editorial: "L'Association",
        isbn: "978-0-375-71457-3",
        portada: "https://images.cdn2.buscalibre.com/fit-in/360x360/05/b9/05b96c1630908a52f3b70d2e5704feb8.jpg"
    },
    {
        id: "CM006",
        titulo: "Asterix y Obelix",
        autor: "René Goscinny y Albert Uderzo",
        genero: "Historietas de humor",
        anio: 1959,
        descripcion: "Sigue las aventuras humorísticas de Asterix, un galo que lucha contra los romanos junto a su amigo Obelix.",
        precio: 15.00,
        stock: 22,
        editorial: "Dargaud",
        isbn: "978-2-86497-006-6",
        portada: "https://m.media-amazon.com/images/I/71RLvM5SgSL._AC_UF894,1000_QL80_.jpg"
    }
];

function contarLibros() {
    console.log(`Total de libros de la categoría Educativa: ${librosComicsManga.length}`);
}

contarLibros();

export default librosComicsManga;
