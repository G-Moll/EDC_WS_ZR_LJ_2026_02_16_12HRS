function App() {
    return (
        <div id="wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header id="header">
            <h2>React App Intro</h2>
        </header>
    );
}
function Content() {
    return (
        <div id="content" class="content">
            <h1>Hello Joshua on React..!</h1>
            <img src="imgs/js-es6.jpg" class="content-img"/>
            <p>Lorem ipsum</p>            
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <p>&copy; Copyright Pilares 2026</p>
        </footer>
    );
}

let rootContainer = document.getElementById( "root" );
let root = ReactDOM.createRoot( rootContainer );
root.render( React.createElement( App ) );

