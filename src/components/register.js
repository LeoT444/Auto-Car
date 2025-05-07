import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Adicionando feedback visual para ações do usuário
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Usuário ${formData.name} cadastrado com sucesso!`);
        setTimeout(() => navigate('/'), 1000); // Adiciona um pequeno atraso para feedback visual
    };

    return (
        <div className={styles.container}>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Senha:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
            <p>Já possui conta? <a href="/">Voltar para login</a></p>
        </div>
    );
}

export default Register;