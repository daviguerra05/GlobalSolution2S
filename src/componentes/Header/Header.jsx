import React from 'react';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css'
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const username =  useState(sessionStorage.getItem('username'));
    const email = useState(sessionStorage.getItem('email'));
    const navigate = useNavigate();

    const logout = () => {
        // Exemplo de limpeza de todos os dados do sessionStorage
        sessionStorage.clear();
        localStorage.clear();
        // Use o método `navigate` para navegar para a rota desejada
        navigate('/');
      };
    return(
        <>
            <header>
                <div id='logo'><img src="/src/assets/logo3.png" alt="" /></div>

                <div id='left_header'> 
                    <span>Global Solution 2023 - Engenhraria de Software</span>
                    <NavDropdown id="nav-dropdown-dark-example" title={username} menuVariant="dark">
                        <Dropdown.ItemText>{email}</Dropdown.ItemText>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </header>
        </>
    )
}