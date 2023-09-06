import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import './assets/styles/custom-styles.css'
import PasswordReset from './pages/PasswordReset'
import Access from './pages/Access'
import Dashboard from './pages/Dashboard'

function App() {

  return (
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/access' element={ <Access /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/reset-password' element={ <PasswordReset /> } />
        <Route path='*' element={ <Navigate to='/' /> } />
      </Routes>
  )
}
export default App
