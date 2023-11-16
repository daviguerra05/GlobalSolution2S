import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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

    const [dados, setDados] = useState(null);
    let dadosJSON
    useEffect(() => {
        // Função para ler o arquivo JSON
        const lerArquivoJSON = async () => {
        try {
            const resposta = await fetch('./src/dados.json');
            dadosJSON = await resposta.json();
            setDados(dadosJSON);
        } catch (erro) {
            console.error('Erro ao ler o arquivo JSON:', erro);
        }
        };

        lerArquivoJSON();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
       
        for (var id in dados){
            if (!Object.values(dados[id]).includes(email)) {
                alert('Usuário criado com sucesso')
                dadosJSON = JSON.stringify({"3":{"nome":username,"emial":email,"senha":password}});
                break
            }
            if (username == dados[id].nome && password == dados[id].senha && email == dados[id].email){
                break
            }else{
                alert('Credenciais erradas...')
                return false
            }
        }

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