import { useEffect, useState } from "react";

export const useTimer = (initialTime: number) => {
  // initialTime is in seconds
  const [time, setTime] = useState(initialTime * 60);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (time > 0) {
      interval = setInterval(() => {
        setTime((previousTime) => previousTime - 1);
        return time;
      }, 1000);
    } else {
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = Math.round(time - hours * 3600 - minutes * 60);
  const restartTime = () => {
    setTime(initialTime * 60);
  };

  return { hours, minutes, seconds, restartTime, time };
};
