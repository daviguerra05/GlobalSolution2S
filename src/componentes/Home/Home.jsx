import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import './home.css'
 
export default function Home(){
    return(
        <div id="home_container">
            <div>
                <div className="main">
                </div>
                <div className="vantagens">
                    <div>
                        <h1>Vantagens</h1>
                        <h2></h2>
                    </div>

                    <div id='cards'>
                        <Card className='card_vt' style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="src\assets\vt1.jpg"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        <Card className='card_vt' style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="src\assets\vt2.jpg"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                        <Card className='card_vt' style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="src\assets\vt1.jpg"/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}