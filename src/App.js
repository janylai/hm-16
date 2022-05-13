import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useEffect } from 'react';
import AutoText from './auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [done,setDone] = useState(false);
  


  useEffect(()=>{
   const storedUserLogedInfo = localStorage.getItem('isLoggedIn')

   if(storedUserLogedInfo === '1')
   setIsLoggedIn(true)
  },[]);

  const loginHandler = async (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn', '1')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AutoText.Provider value={{isLoggedIn:isLoggedIn,setDone:setDone,}}>
      <MainHeader onLogout={logoutHandler} />

      <main style={{backgroundColor:done ? 'black' : 'white'}}>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>

      </AutoText.Provider>
    </React.Fragment>
    
  );
}

export default App;
