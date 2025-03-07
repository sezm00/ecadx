import logo from './logo.svg';
import NavBar from './components/NavBar';
import SlideShow from './components/slideshow';
import './App.css';

function App() {
  return (
    <div className='parent'>
       <div className='nav'>
        <NavBar />
        <SlideShow/>
      </div>
    </div>
   
  );
}

export default App;
