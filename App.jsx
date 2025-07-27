
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import Banner from './components/Banner';
import Moviecard from './components/Moviecard';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path='/' element={<><Banner/> <Movies/> </>}/>
    <Route path='/watchlist' element={ <Watchlist/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
