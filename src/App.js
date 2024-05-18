import './App.css';
import About from './components/About'
import Acardion from './components/Acardion'
import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Price from './components/Price'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Services/>
     <About/>
     <Price/>
     <Acardion/>
     <Portfolio/>
    </div>
  );
}

export default App;
