import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import './assets/styles/custom-styles.css'
import PasswordReset from './pages/PasswordReset'

function App() {

  return (
    <Container fluid 
      className='app-landing-page flex-center vh-100'
    >
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/reset-password' element={ <PasswordReset /> } />
        <Route path='*' element={ <Navigate to='/' /> } />
      </Routes>
    </Container>
  )
}
export default App
