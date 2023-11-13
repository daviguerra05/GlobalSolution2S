import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import Header from '../Header/Header.jsx'

export default function Login(){
    const {handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/Home');
    };

    return(
        <>
            <Header/>
            <section className='login_page'>
                <div className='bg_img'></div>
                <div className='form_container'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </section>
        </>
    )
}