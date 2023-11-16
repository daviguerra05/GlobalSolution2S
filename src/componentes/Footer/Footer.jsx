import './footer.css'

export default function Footer(){
    return(
        <>
        <footer>
            <div><div id='ft_logo'></div></div>
            <div className='ft_'>
                <h4>Nosso time</h4>
                <a href="https://github.com/daviguerra05" target='_blank'>Davi Guerra</a>
                <a href="https://github.com/ruiasiqueira" target='_blank'>Rui Amorim</a>
            </div>
            <div className='ft_'>
                <h4>Contatos</h4>
                <a href="mailto:davi@passanha.com.br">davi@passanha.com.br</a>
                <a href="mailto:rui@gmail.com">rui@gmail.com</a>
            </div>
        </footer>
        </>
    )
}