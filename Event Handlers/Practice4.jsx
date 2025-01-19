
// 4. Submit Form
// Create a form with two input fields for "Name" and "Email" and a "Submit" button. When submitted, prevent the default form action and log the name and email in the console.

import React, { useState } from "react";

const App = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", formData.name);
        console.log("Email:", formData.email);
    };

    return (
        <div>
            <h1>Submit Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;
