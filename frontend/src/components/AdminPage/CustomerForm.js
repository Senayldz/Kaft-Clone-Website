import { useState } from "react"
import { Link } from 'react-router-dom';

const CustomerForm = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const customer = { name, surname, email, password }
        const response = await fetch('/api/customers', {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields || [])
        } else {
            setError(null)
            setName('')
            setSurname('')
            setEmail('')
            setPassword('')
            setEmptyFields([])
            console.log('new customer added', json)
        }
    }

    return (
        <div className='formBody'>
            <form className="create" onSubmit={handleSubmit}>
                <h3>Add new Customer</h3>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={emptyFields.includes('name') ? 'error' : ''}
                />
                <label>Surname: </label>
                <input
                    type="text"
                    name="surname"
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    className={emptyFields.includes('surname') ? 'error' : ''}
                />
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={emptyFields.includes('email') ? 'error' : ''}
                />
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={emptyFields.includes('password') ? 'error' : ''}
                />
                <button className='updatebtn'>Add Customer</button>
                {error && <div className="error">{error}</div>}
            </form>
            <Link to="/admin">
                <button className="updatebtn">
                    Back to DashBoard
                </button>
            </Link>
        </div>
    )
}

export default CustomerForm
