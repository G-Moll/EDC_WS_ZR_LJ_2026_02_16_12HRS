function App() {
    return React.createElement(
        "div",
        { id: "wrapper", className: "wrapper" },
        React.createElement( Header ),
        React.createElement( Content ),
        React.createElement( Footer )
    );
}

function Header() {
    return React.createElement(
        "header",
        { id: "header", className: "header" },
        React.createElement(
            "h2", null, "Header component on React"
        )
    );
}
function Content() {
    return React.createElement(
        "div",
        { id: "content", className: "content" },
        React.createElement( "h1", null, "Hello Joshua on React" ),
        React.createElement( "img", { src: "imgs/js-es6.jpg", className: "content-img" }, null ),
        React.createElement( "p", null, "Lorem ipsum" )
    );
}

function Footer() {
    return React.createElement(
        "footer",
        { id: "footer", className: "footer" },
        React.createElement( "p", {}, "Copyright Pilares 2026" )
    );
}

let rootContainer = document.getElementById( "root" );
let root = ReactDOM.createRoot( rootContainer );
root.render( React.createElement( App ) );

