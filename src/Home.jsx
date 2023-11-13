import Header from "./componentes/Header/Header"
import Footer from "./componentes/Footer/footer"
import './css/home.css'

export default function Home(){
    return(
        <>
            <Header/>
                <section id="solucao">
                    <div></div>
                    <aside></aside>
                </section>

                <section id="vantagens">
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            <Footer/>
        </>
    )
}