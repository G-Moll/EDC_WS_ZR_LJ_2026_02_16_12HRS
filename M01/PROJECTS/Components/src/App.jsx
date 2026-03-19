import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter/Counter";
import UsersList from "./components/UsersList/UsersList";


function App() {
    const [ showUsers, setShowUsers ] = useState( false );
    
    return (
        <div>
            <Card name="Joshua" age={ 30 } />
            <Card name="React" age={ 10 }></Card>
            <Card name="JavaScript" age={ 20 } />
            <Card name="Java" age={ 25 } />

            <hr />

            <Counter />

            <hr />
            <button onClick={ () => setShowUsers( ! showUsers ) }> { showUsers ? "ocultar" : "mostrar"}
            </button>
            { showUsers && <UsersList />}
        </div>);
}

export default App;
