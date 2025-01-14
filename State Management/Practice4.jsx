// Form Handler
// Create a form with multiple input fields (e.g., name, email, and password). Display the form data dynamically as the user types
import { useState } from 'react';

export default function FormHandler() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Form Handler</h1>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        style={inputStyle}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        style={inputStyle}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        style={inputStyle}
                    />
                </div>
            </form>

            <h3>Form Data:</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
        </div>
    );
}

const inputStyle = {
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
};