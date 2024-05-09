import React, { useState, useEffect } from "react";
export default function Dates() {
  const [dateMessage, setDateMessage] = useState("");
  const [hoursMessage, setHoursMessage] = useState("");

  useEffect(() => {
    const date = new Date();
    const newDateMessage =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const newHoursMessage =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    setDateMessage(newDateMessage);
    setHoursMessage(newHoursMessage);
  }, []);

  return (
    <span>
      <em>{`${dateMessage} / ${hoursMessage}`}</em>
    </span>
  );
}
