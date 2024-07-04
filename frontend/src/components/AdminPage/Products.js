import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'; // Link componentini ekleyin

const Titles = {
    id: 'Product ID',
    title: 'Title',
    image: 'İmage',
    description: 'Description',
    content: 'Content',
    price: 'Price',
    color: 'Color',
    count: 'Count',
    update: 'Update',
    delete: 'Delete',
};

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products')
            const json = await response.json()

            if (response.ok) {
                setProducts(json)
            }
        }

        fetchProducts()
    }, [])

    const handleClick = async (id) => {
        const response = await fetch('/api/products/' + id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            setProducts(products.filter(product => product._id !== id))
        }
    }

    return (
        <div className="home">

            <div style={{ margin: '10%' }}>
                <h1>Admin Panel</h1>
                <h2>Product List</h2>
                <div>
                    <h4 style={{ display: 'inline-block', marginRight: '10px' }}>
                        Add New Product:
                    </h4>
                    <Link to="/admin/addproduct">
                        <button className="button" role="button">
                            Add Product
                        </button>
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            {Object.values(Titles).map((title) => (
                                <th key={title}>
                                    <h3>{title}</h3>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.title}</td>
                                <td>
                                    <img src={product.image} style={{ width: '100px', height: '100px' }} />
                                </td>
                                <td>{product.description}</td>
                                <td>{product.content}</td>
                                <td>{product.price}</td>
                                <td>{product.color}</td>
                                <td>{product.count}</td>
                                <td>
                                    <Link to={`/admin/update/product/${product._id}`}>
                                        <button className="button" role="button">
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="buttonDelete" onClick={() => handleClick(product._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products
