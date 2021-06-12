import style from './Home.module.css'
const Home = () => {  

    return (
        
        <header className="bg-primary bg-gradient text-white">
            <div className="container  text-center">
                <div className={style.home}>
                    <h1 className="fw-bolder">Home Listado de compras</h1>
                    <p className="lead">Seleccione en menú la opción Lista de compras para generar un listado</p>
                </div>
            </div>
        </header>
        )
    }
    
    export default Home