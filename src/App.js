import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';


function App() {
  return (
   <SmoothScroll>
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element = {<Home />} />
     </Routes>
    </div>
    </SmoothScroll>
  );
}

export default App;
