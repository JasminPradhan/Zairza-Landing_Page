import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar.js';
import Slide1 from './components/slide_1.js';
import Slide2 from './components/slide_2.js';
import Slide3 from './components/slide_3.js';
import Slide4 from './components/slide_4.js';
import Slide5 from './components/slide_5.js';
import Slide6 from './components/slide_6.js';
import Slide7 from './components/slide_7.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
    </div>
  );
}

export default App;
