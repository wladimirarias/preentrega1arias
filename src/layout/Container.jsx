import React, {Fragment} from 'react'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer/Footer'

const Container = (props) => {
  return (
    <Fragment>
        <Navbar
            items={["Inicio", "Productos", "Opciones de Entrega", "Sobre nosotros", "Ubicación / Contacto"]}
            navbarLogoCss={"text-danger navbar-brand"}
            navbarLogo={"Los Acantos"}
        />
        {/*Contenido dinámico*/}
        {props.children}
        <Footer/>
    </Fragment>
  );
};

export default Container
