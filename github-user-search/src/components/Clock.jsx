import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  const formatedTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="text-xl pt-4">
      <p>Current Time: {formatedTime(date)}</p>
    </div>
  );
}