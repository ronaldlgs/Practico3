import React from 'react'
import style from './Menu.module.css'
import { 
    BrowserRouter as Router,
    Link,
    Route,
  } from 'react-router-dom'
export default function Menu() {

    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <Link className={style.menu}  to='/'>Home</Link>
                        <Link className={style.menu} to='/ListaCompra'>Lista de Compras</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}