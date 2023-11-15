import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';
import './home.css'
 
export default function Home(){
    return(
        <div id="home_container">
            <div>
                <div className="main">
                    <div className='main_left_container'>
                        <div className='main_img'></div>
                        <div>
                            <h1>Health Buddy</h1>  
                            <p>cuidando de você como um amigo</p>  
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin placerat tincidunt volutpat. 
                            Curabitur quis ipsum in velit placerat semper sit amet vel tellus. 
                            Ut gravida porta ex a lobortis
                        </div>
                        <Button variant="primary">Mais informações</Button>
                    </div>
                    <aside className='main_aside'>
                        <div>
                            <h1>
                                O que é a solução
                                <svg style={{margin:'0 10px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>
                            </h1>
                            <p>
                                Uma inteligência artificial na qual facilitará a jornada do paciente, 
                                pois ele terá a possibilidade de iniciar sua triagem a caminho do hospital, 
                                caso o paciente não tenha integrado seus health care devices ao sistema, 
                                chegando lá será necessário apenas medir a pressão e temperatura, 
                                um procedimento que será realizado no momento que o paciente chegar ao hospital
                            </p>
                        </div>

                        <div>
                            <h1>
                                O que ela fará
                                <svg style={{margin:'0 10px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>
                            </h1>
                            <p>
                                Automação no processo de triagem com a criação de uma inteligência artificial. 
                                Ajudando o processo de jornada do paciente a ser mais rápido e eficiente
                                
                            </p>
                        </div>

                        <div>
                            <h1>
                                Como funcionará
                                <svg style={{margin:'0 10px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>
                            </h1>
                            <p>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </div>
                    </aside>
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