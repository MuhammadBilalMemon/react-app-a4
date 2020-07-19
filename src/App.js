import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations'
import './App.css';

function App() {
  const birds = useWebAnimations({
    keyframes: [
      { transform: "translateX(-1000px)" },
    ],
    timing: {
      duration: 10000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const dog = useWebAnimations({
    keyframes: [
      { transform: "translateX(1100px)" },
    ],
    timing: {
      duration: 10000,
      iterations: Infinity,
      easing: "linear",
    }
  });


  const pauseAnimation = () => {
    birds.getAnimation().pause();
    dog.getAnimation().pause();
  }
  const startAnimation = () => {
    birds.getAnimation().play();
    dog.getAnimation().play();
  }
  const reverseAnimation = () => {
    birds.getAnimation().reverse();
    dog.getAnimation().reverse();
  }
  useEffect(() => {

  }, [birds, dog])

  return (
    <>
      <div className="main-container">
        <div className="flyingBirds" ref={birds.ref}></div>
        <div className="runningDog" ref={dog.ref}></div>
      </div >
      <button onClick={pauseAnimation}>Pause</button>
      <button onClick={startAnimation}>Start</button>
      <button onClick={reverseAnimation}>Reverse</button>
    </>
  );
};
export default App;
