// Template Literals: Strings
let formatDate = ( dateValue ) => {
    let date = new Date( dateValue.timestamp );
    return `Project: ${ dateValue.title } ${ date.toLocaleDateString() } at ${ date.toLocaleTimeString() }`;
}
let noteOne =  {
    title: "Web Store",
    timestamp: Date.now()
}
let noteTwo =  {
    title: "AWS Certification",
    timestamp: new Date( "2026-04-28 14:00:00" )
}

console.log( formatDate( noteOne ) );
console.log( formatDate( noteTwo ) );
