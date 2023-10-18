import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorite from './components/Favorite';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
       <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/Favoritas" element={<Favorite />}  />
          <Route path="*" element={<NotFound />}  />
            
        </Routes>
     
    </>
  )
}

export default App
