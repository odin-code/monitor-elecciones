import React from "react";
import moment from "moment";

function CountDown({ text, textIf }) {
  const calculateTimeLeft = () => {
    const today = moment();
    const electionDay = moment([2021, 10, 14, "08:00"]);
    const days = electionDay.diff(today, "days");
    const hours = electionDay.diff(today, "hours");
    let timeLeft = {
      days: days,
      hours: hours,
    };

    return timeLeft;
  };

  const timeLeft = calculateTimeLeft();
  let message = timeLeft.days === 1 ? "horas" : "días";

  return (
    <div>
      {timeLeft.hours > 1 ? (
        `${text} Faltan ${
          timeLeft.days === 1 ? timeLeft.hours : timeLeft.days
        } ${message}`
      ) : (
        <span>{textIf}</span>
      )}
    </div>
  );
}

export default CountDown;
