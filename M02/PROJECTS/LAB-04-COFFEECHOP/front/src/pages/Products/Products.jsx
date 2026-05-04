import CardProduct from '../../components/CardProduct/CardProduct';
import styles from './Products.module.css';

const products = [
    {
        "id": 1,
        "name": "Café Latte",
        "category": "beverages",
        "description": "Suave espresso con leche vaporizada y una pequeña capa de espuma. Perfecto para comenzar el día."
    },
    {
        "id": 2,
        "name": "Pastel de Chocolate",
        "category": "foods",
        "description": "Delicioso bizcocho de chocolate oscuro con cobertura cremosa y chispas de cacao."
    },
    {
        "id": 3,
        "name": "Jugo Verde",
        "category": "beverages",
        "description": "Mezcla refrescante de espinaca, manzana verde, apio, pepino y un toque de limón."
    },
];

function Products() {

    return (
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
    );
}

export default Products;
