// Ternary Operator
// ? :
let note = {
    title: "Meeting Notes",
    content: "Lorem ipsum dolor",
    timestamp: Date.now(),
    isFavorite: ! false
}

let noteToString = `
    Título: ${ note.title }
    ¿Es favorito?: ${ note.isFavorite ? "Sí es favorito" : "No es favorito" }
    Última modificación: ${ new Date( note.timestamp ).toLocaleString() }
`;
console.log( noteToString );
