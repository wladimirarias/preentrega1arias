import './App.css';
//import Navbar from './components/NavBar/Navbar';
import Container from './layout/Container';
//import Contacto from './pages/Contacto';
import Home from './pages/Home';

function App() {
  return (
    
    <div className='App'>
      <h1>Comercial los Acantos</h1>
      <Container>
        <Home />
      </Container>

    </div>

  );
}

export default App;
