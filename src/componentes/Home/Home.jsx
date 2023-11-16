import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Modal from 'react-bootstrap/Modal';
import './home.css'
  
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mais Informações
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Para mais informações nos mande um email:
            <br/>
            <a href='mailto:davi@passanha.com.br' style={{textDecoration:'none'}}>davi@passanha.com.br</a>
            <br />
            <a href='mailto:rui@gmail.com' style={{textDecoration:'none'}}>rui@gmail.com</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} style={{background:'#e50012',border:'none'}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default function Home(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div id="home_container">
            <Header/>
            <div>
                <div className="main">
                    <div className='main_left_container'>
                        <div className='main_img'></div>

                        <div>
                            <div>
                                <h1>Health Buddy</h1>  
                                <p>Cuidando de você como um amigo</p>  
                            </div>
                            <div>
                                Nosso projeto visa otimizar a jornada do paciente na saúde, 
                                utilizando inteligência artificial para triagem remota, 
                                agilizando atendimento hospitalar e priorizando casos emergenciais com eficiência.
                            </div>
                        </div>

                        <div id ='bt_hm'>
                            <Button variant="primary" className='bt_lg' style={{height:'6vh'}} onClick={() => setModalShow(true)}>Mais informações</Button>
                        </div>
                    </div>

                    <aside className='main_aside'>
                        <div>
                            <h1>
                                O que é a solução
                                <svg style={{margin:'0 10px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>
                            </h1>
                            <h2></h2>
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
                            <h2></h2>
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
                            <h2></h2>
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
                        <Card className='card_vt' style={{ maxWidth: '30rem', minWidth: '20rem' }}>
                            <Card.Img variant="top" src="src\assets\vt1.jpg"/>
                            <Card.Body>
                                <Card.Title>Otimização de tempo</Card.Title>
                                <Card.Text>
                                    O projeto oferece vantagens significativas na otimização do tempo, 
                                    agilizando a jornada do paciente por meio de triagem remota, 
                                    reduzindo espera e garantindo atendimento hospitalar eficiente.
                                </Card.Text>
                                <Button variant="primary" className='bt_lg' onClick={() => setModalShow(true)}>Mais informações</Button>
                            </Card.Body>
                        </Card>

                        <Card className='card_vt' style={{ maxWidth: '30rem', minWidth: '20rem'  }}>
                            <Card.Img variant="top" src="src\assets\vt2.jpg"/>
                            <Card.Body>
                                <Card.Title>Acessibilidade</Card.Title>
                                <Card.Text>
                                O projeto, ao priorizar a acessibilidade, 
                                promove triagem remota, eliminando barreiras físicas, 
                                assegurando atendimento hospitalar inclusivo e eficaz, 
                                otimizando a experiência do paciente.
                                </Card.Text>
                                <Button variant="primary" className='bt_lg' onClick={() => setModalShow(true)}>Mais informações</Button>
                            </Card.Body>
                        </Card>

                        <Card className='card_vt' style={{ maxWidth: '30rem', minWidth: '20rem'  }}>
                            <Card.Img variant="top" src="src\assets\vt3.jpg"/>
                            <Card.Body>
                                <Card.Title>Praticidade</Card.Title>
                                <Card.Text>
                                    A praticidade é destacada no projeto, 
                                    que oferece triagem remota, simplificando processos. 
                                    Reduzindo burocracias, garante atendimento hospitalar 
                                    eficaz e conveniente, elevando a experiência do paciente.
                                </Card.Text>
                                <Button variant="primary" className='bt_lg' onClick={() => setModalShow(true)}>Mais informações</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer/>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}