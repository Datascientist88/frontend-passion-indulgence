import React, { useEffect, useState } from "react";
import "../Styles/clockStyle.css"; // Adjusted import path

const AnalogClock = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    ampm: "AM",
  });

  useEffect(() => {
    const hr = document.getElementById("hr");
    const mn = document.getElementById("mn");
    const sc = document.getElementById("sc");

    const updateClock = () => {
      const day = new Date();
      const hh = day.getHours() * 30; // 360 degrees / 12 hours = 30 degrees per hour
      const mm = day.getMinutes() * 6; // 360 degrees / 60 minutes = 6 degrees per minute
      const ss = day.getSeconds() * 6; // 360 degrees / 60 seconds = 6 degrees per second

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`; // Add mm/12 to move the hour hand gradually
      mn.style.transform = `rotateZ(${mm}deg)`; // Rotate the minute hand
      sc.style.transform = `rotateZ(${ss}deg)`; // Rotate the second hand

      // Digital clock
      let h = day.getHours();
      let m = day.getMinutes();
      let s = day.getSeconds();
      const am = h >= 12 ? "PM" : "AM";

      // Convert 24hr clock to 12hr clock
      if (h > 12) {
        h -= 12;
      }

      // Add zero before single-digit numbers
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      setTime({ hours: h, minutes: m, seconds: s, ampm: am });
    };

    const interval = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <div className="circle" id="sc" style={{ "--clr": "#04fc43" }}>
          <i></i>
        </div>
        <div className="circle circle2" id="mn" style={{ "--clr": "#fee800" }}>
          <i></i>
        </div>
        <div className="circle circle3" id="hr" style={{ "--clr": "#ff2972" }}>
          <i></i>
        </div>
        {[...Array(12).keys()].map((num) => (
          <span key={num + 1} style={{ "--i": num + 1 }}>
            <b>{num + 1}</b>
          </span>
        ))}
      </div>
      {/* Digital Clock */}
      <div id="time">
        <div id="hour" style={{ "--clr": "#ff2972" }}>
          {time.hours}
        </div>
        <div id="minutes" style={{ "--clr": "#fee800" }}>
          {time.minutes}
        </div>
        <div id="seconds" style={{ "--clr": "#04fc43" }}>
          {time.seconds}
        </div>
        <div id="ampm">{time.ampm}</div>
      </div>
    </div>
  );
};

export default AnalogClock;
