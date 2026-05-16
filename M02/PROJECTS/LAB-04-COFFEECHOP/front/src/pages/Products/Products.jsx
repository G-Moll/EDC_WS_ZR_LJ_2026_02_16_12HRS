import { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import styles from './Products.module.css';

function Products() {

    const [ products, setProducts ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    useEffect( () => {
        const fetchProducts = async () => {
            try {
                setLoading( true );
                const response = await fetch( "http://localhost:5173/_data/products.json" );
                // const response = await fetch( "http://localhost:8282/products" );

                if( ! response.ok ) throw new Error( `HTTP Error ${ response.status }`  );

                const dataProducts = await response.json();
                // console.log( dataProducts );
                // setProducts( dataProducts.data );
                setProducts( dataProducts );
            }
            catch( e ) {
                setError( e.message );
                console.log( e )
            }
            finally {
                setLoading( false );
            }
        }
        fetchProducts();
    }, [] );

    return (
    <>
        <div className={ styles.products }>
            <h1>Productos</h1>
            <div>
                <h2>Lista de productos hackers</h2>
                {products.map( product => (
                    <CardProduct
                        key={ product.id }
                        name={ product.name }
                        category={ product.category }
                        description={ product.description }
                    />
                ))}
            </div>
        </div>
    </>
    );
}

export default Products;
