function Card( { name, age } ) {

    return (<div>
        <h1>Hello { name }</h1>
        { <p>Tienes { age } años</p> }
    </div>);
}

export default Card;
