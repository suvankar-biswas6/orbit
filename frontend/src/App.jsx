import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home/Home'
import Login from './assets/pages/login/Login'
import SignUp from './assets/pages/signup/SignUp'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const { authUser } = useAuthContext();
  return (
     <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={authUser ? <Navigate to="/" />: <Login/>}/>
        <Route path="/signup" element={authUser ? <Navigate to="/" />: <SignUp/>}/>
      </Routes>
      <Toaster position="top-right"
  reverseOrder={false}/>
     </div>
  )
}

export default App
