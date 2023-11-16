import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import Header from '../Header/Header';

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const  handleSubmit = (e) => {
        e.preventDefault();

        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('username', username);

        navigate('/Home');
    };

    return(
        <>
            <Header/>
            <section className='login_page'>
                <div className='bg_img'></div>

                <div className='form_container'>
                    
                    <Form onSubmit={handleSubmit}>

                        <FloatingLabel className="mb-3" label="Nome de usuário" controlId="floatingInputl">
                            <Form.Control className='form_control' type="text" value={username} onChange={(e) => setUsername(e.target.value)}placeholder='Nome de usuário' required/>
                        </FloatingLabel>

                        <FloatingLabel className="mb-3" label="Endereço de Email" controlId="floatingInputl">
                            <Form.Control className='form_control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Endereço de Email' required/>
                        </FloatingLabel>

                        <FloatingLabel className="mb-3" label="Senha" controlId="floatingInputl">
                            <Form.Control className='form_control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' required/>
                        </FloatingLabel>

                        <Button variant="primary" type="submit" className='bt_lg'>
                            Submit
                        </Button>
                    </Form>
                </div>

            </section>
        </>
    )
}