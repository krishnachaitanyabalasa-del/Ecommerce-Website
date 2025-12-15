import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
function App() {
  return(
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route index element={<HomePage/>}/>
    </Routes>
  );
}

export default App
