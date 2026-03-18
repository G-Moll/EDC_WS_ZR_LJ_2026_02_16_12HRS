import { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
    const [ counter, setCounter ] = useState( 0 );

    const increment = () => setCounter( counter + 1 );
    const decrement = () => setCounter( counter - 1);
    const reset = () =>  setCounter( 0 );

    return (
        <div className={ styles.counter }>
            <h2>Counter: { counter }</h2>
            <button
                className={ styles.decrement }
                onClick={ decrement }>-</button>
            <button onClick={ reset }>Reset</button>
            <button
                className={ styles.increment }
                onClick={ increment }>+</button>
        </div>
    );
}

export default Counter;
