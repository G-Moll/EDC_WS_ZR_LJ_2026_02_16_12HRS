import Card from "./components/Card";
import Counter from "./components/Counter/Counter";

function App() {
    return (
        <div>
            <Card name="Joshua" age={ 30 } />
            <Card name="React" age={ 10 }></Card>
            <Card name="JavaScript" age={ 20 } />
            <Card name="Java" age={ 25 } />

            <hr />

            <Counter />

        </div>);
}

export default App;
