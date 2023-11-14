import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

export default function Login(){
    const {handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/Home');
    };

    return(
        <>
            <section className='login_page'>
                <div className='bg_img'></div>

                <div className='form_container'>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <FloatingLabel className="mb-3" label="Nome de usuário" controlId="floatingInputl">
                            <Form.Control className='form_control' type="text" placeholder='Nome de usuário' required/>
                        </FloatingLabel>

                        <FloatingLabel className="mb-3" label="Endereço de Email" controlId="floatingInputl">
                            <Form.Control className='form_control' type="email" placeholder='Endereço de Email' required/>
                        </FloatingLabel>

                        <FloatingLabel className="mb-3" label="Senha" controlId="floatingInputl">
                            <Form.Control className='form_control' type="password" placeholder='Senha' required/>
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