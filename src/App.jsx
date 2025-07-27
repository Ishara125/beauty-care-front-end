
import './App.css'
import ProductCart from './components/product-card'
import Header from './components/header'
import Loginpage from './pages/login'
import Admin from './pages/admin'
import Adminpage from './pages/admin'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'

function App() {

  return (
    
    <BrowserRouter>
        <Routes path='/*'>
            <Route path='/admin/*' element={<Adminpage/>}/>
            <Route path='/login/*' element={<Loginpage/>}/>
            <Route path='/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
   
    </BrowserRouter>

   );
}

export default App;
