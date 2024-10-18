import React, { useState } from 'react';
import Layout from '../Componentes/Layout';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log({ name, email, message });
    };

    return (
        <Layout>
            <div className="m-5 max-w-md mx-auto p-6 rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold text-[#792D2B]">Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mt-4 text-[#792D2B]" htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-[#792D2B] rounded-md"
                />

                <label className="block mt-4 text-[#792D2B]" htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-[#792D2B] rounded-md"
                />

                <label className="block mt-4 text-[#792D2B]" htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    required
                    className="mt-1 block w-full p-2 border border-[#792D2B] rounded-md"
                />

                <button
                    type="submit"
                    className="mt-4 w-full bg-[#792D2B] text-white py-2 rounded-md hover:bg-[#792D2B]/70"
                >
                    Enviar
                </button>
            </form>
        </div>
        </Layout>
    );
};

export default ContactForm;
