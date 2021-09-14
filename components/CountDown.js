import React, { useState } from "react";

function CountDown({ text, textIf }) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-14`) - +new Date();
    let timeLeft =
      difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : null;

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  let days = timeLeft === 1 ? "día" : "días";
  let areLeft = timeLeft === 1 ? "Falta" : "Faltan";

  return (
    <div>
      {timeLeft ? `${text} ${areLeft} ${timeLeft} ${days}` : <span>{textIf}</span>}
    </div>
  );
}

export default CountDown;
