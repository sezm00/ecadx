import logo from './logo.svg';
import NavBar from './components/NavBar';
import SlideShow from './components/slideshow';
import Content from './components/content';
import './App.css';

function App() {
  return (
    <div className='parent'>
       <div className='nav'>
        <NavBar />
      </div>
      <div className='igm-slider'>
        <SlideShow/>
      </div>
      <div className='content'>
        <Content/>
      </div>
    </div>
   
  );
}

export default App;
