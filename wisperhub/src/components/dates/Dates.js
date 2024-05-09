<<<<<<< HEAD
import React from "react";

export default function Dates() {
  let date = new Date();
  let dateMessage =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let hoursMessage =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
=======
import React, { useState, useEffect } from "react";

export default function Dates() {
  const [dateMessage, setDateMessage] = useState("");
  const [hoursMessage, setHoursMessage] = useState("");

  useEffect(() => {
    const date = new Date();
    const newDateMessage = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const newHoursMessage = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    setDateMessage(newDateMessage);
    setHoursMessage(newHoursMessage);
  }, []);
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4

  return (
    <span>
        <em>
          {`${dateMessage} / ${hoursMessage}`}
        </em>
    </span>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 046ca72901db62e2be2550c40410f7491ffbd3b4
