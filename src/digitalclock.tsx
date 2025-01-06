
import { useState, useEffect } from 'react';


export default function DigitalClock() {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  // for the title
  useEffect(() => {
    document.title = time.toLocaleTimeString();
  }, [time]);

  function formatTime(time: Date): JSX.Element {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    let Meridian: string = hours < 12 ? "AM" : "PM";

    return (
      <div>
        <span>
          {hours}.{minutes}.{second} {Meridian}
        </span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="flex items-end justify-center text-white font-extrabold text-5xl">
        Nischal Sharma
      </h1>
      <div className="flex items-center  justify-center h-screen text-white font-extrabold  text-8xl">
        {formatTime(time)}
      </div>
    </div>
  );
}
