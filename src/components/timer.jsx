import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timerId = setTimeout(function updateElapsedTime() {
    const currentTime = Date.now();
    const elapsed = Math.floor((currentTime - startTime) / 1000); 
      setElapsedTime(elapsed);

      setTimeout(updateElapsedTime, 1000);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []); 

  return (
    <div>
      <p>Пройдений час: {elapsedTime} секунд</p>
    </div>
  );
};



