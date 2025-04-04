import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings'
import Product from './pages/Product';
import ProtectedRoute from './components/ProtectedRoute';


function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/products/:id/:section' element={<Product/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
          }>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='settings' element={<Settings/>}></Route>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

