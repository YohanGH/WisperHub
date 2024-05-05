import React from "react";

export default function Dates() {
  let date = new Date();
  let dateMessage =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let hoursMessage =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <span>
        <em>
          {`${dateMessage} / ${hoursMessage}`}
        </em>
    </span>
  );
}