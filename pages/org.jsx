import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Org = () => {
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
      } else {
        if (seconds === 0) {
          if (minutes === 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
          }
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  // Format the time remaining
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl text-white font-bold mb-4">Under Construction</h1>
      <p className="text-lg text-white">This page is currently under construction. Please check back later.</p>
      <p className="text-lg text-white">Will be back in {formattedTime} hours</p>
      <Link href="/">
        <a className="mt-4 text-lg text-white underline">Go back to home Page</a>
      </Link>
    </div>
  );
};

export default Org;
