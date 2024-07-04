import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'; // Link componentini ekleyin

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const Titles = {
    userid: 'User ID',
    name: 'Name',
    surname: 'Surname',
    eposta: 'Eposta',
    date: 'Date Of Registration',
    update: 'Update User',
    delete: 'Delete User',
};

const Home = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch('/api/customers')
            const json = await response.json()

            if (response.ok) {
                setCustomers(json)
            }
        }

        fetchCustomers()
    }, [])

    const handleClick = async (id) => {
        const response = await fetch('/api/customers/' + id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            setCustomers(customers.filter(customer => customer._id !== id))
        }
    }

    return (
        <div className="home">

            <div style={{ margin: '10%' }}>
                <h1>Admin Panel</h1>
                <h2>Customers List</h2>
                <div>
                    <h4 style={{ display: 'inline-block', marginRight: '10px' }}>
                        Add New Customer:
                    </h4>
                    <Link to="/admin/addcustomer">
                        <button className="button" role="button">
                            Add Customer
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
                        {customers && customers.map((customer) => (
                            <tr key={customer._id}>
                                <td>{customer._id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.surname}</td>
                                <td>{customer.email}</td>
                                <td>{formatDistanceToNow(new Date(customer.createdAt), { addSuffix: true })}</td>
                                <td>
                                    <Link to={`/admin/update/customer/${customer._id}`}>
                                        <button className="button" role="button">
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="buttonDelete" onClick={() => handleClick(customer._id)}>
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

export default Home
