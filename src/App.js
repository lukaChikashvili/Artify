import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import AllArtists from './components/AllArtists';
import Footer from './components/Footer';


function App() {
  return (
   <SmoothScroll>
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/artists' element = {<AllArtists />} />
     </Routes>
     <Footer />
    </div>
    </SmoothScroll>
  );
}

export default App;
