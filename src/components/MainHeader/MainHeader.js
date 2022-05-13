import React, { useContext } from 'react';
import AutoText from '../../auth-context';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';



const MainHeader = (props) => {

  const cont = useContext(AutoText)

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation  onLogout={props.onLogout} />
      <input onClick={() => cont.setDone((prev) => !prev)} type="checkbox" />
    </header>
  );
};

export default MainHeader;
