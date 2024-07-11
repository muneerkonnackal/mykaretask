
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './Pages/Login';
import UserHome from './Pages/UserHome';
import AdminDashboard from './Pages/AdminDashboard';
import Allusers from './Pages/Allusers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/userregister' element={<Login userregister/>}/>
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/allusers' element={<Allusers/>}/>
      </Routes>
     {/* <Header/> */}
    </div>
  );
}

export default App;
