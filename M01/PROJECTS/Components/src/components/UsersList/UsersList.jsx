import { useState, useEffect } from 'react';
import styles from './UsersList.module.css';

function UsersList() {
    const [ users, setUsers ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    useEffect( () => {
        fetch( 'https://jsonplaceholder.typicode.com/users...' )
            .then( response => {
                if( ! response.ok ) throw new Error( `Response Status: ${ response.status }` );
                return response.json();
            })
            .then( jsonData => {
                setUsers( jsonData );
                setLoading( false );
            })
            .catch( error => {
                setError( error.message );
                setLoading( false );
            })
    }, [] );

    if( loading ) return <div>Cargando datos de usuarios...</div>;
    if( error ) return <div>Error: { error }</div>;

    return (
        <div className={ styles.userslist }>
            <h2>Lista de usuarios</h2>
            <ul>
                { users.map( user => (
                    <li key={ user.id }>
                        { user.name } - { user.email }
                    </li>
                ) ) }
            </ul>
        </div>
    );
}

export default UsersList;
