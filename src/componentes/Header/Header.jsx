import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navigate = useNavigate();

    const logout = () => {
        // Use o método `navigate` para navegar para a rota desejada
        navigate('/');
      };
    return(
        <>
            <header>
                <div id='logo'><img src="/src/assets/logo3.png" alt="" /></div>

                <div id='left_header'> 
                    <span>Global Solution 2023 - Engenhraria de Software</span>
                    <NavDropdown id="nav-dropdown-dark-example" title="Usuário" menuVariant="dark">
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </header>
        </>
    )
}