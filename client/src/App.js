import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import Footer from './components/Footer/Footer';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import {ReactComponent as Signal} from './assets/images/signal.svg';

export default function App() {

function useLocalState(localItem) {
  const [local, setState] = useState(localStorage.getItem(localItem));

  function setLocal(newItem) {
    localStorage
    .setItem(localItem, 
    JSON.stringify(newItem));
    setState(newItem);
  } 

  return [local, setLocal];
}

const [hasVisited, setHasVisited] = useLocalState("DUC_Visited");

const handleEnterSite = () => {
  setHasVisited(true);
}


if (!hasVisited) {
  return (
    <div className="intro">
      <Signal 
      className="intro__icon" 
      onClick={handleEnterSite}
      />  
    <IntroAnimation 
    animClass="animation-window" 
    onDivClick={handleEnterSite}
    />

    
    </div>
  )
}
  return (
    <>
      <Header />
      <Panel />
      <Footer />
    </>
  ); 
};
