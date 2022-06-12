import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Register from './pages/register/register';
const AppRouter=()=>{
    return(
     <Router>
         <Routes>
             <Route path='/' element={<Landing/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/dashboard" element={<Dashboard/>}/>
             <Route path="/signup" element={<Register/>}/>
         </Routes>
     </Router>
    )
}
export default AppRouter;