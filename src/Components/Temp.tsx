import { useEffect, useState } from "react";

export default function Temp() {
  const startDate = new Date("2021-09-08T00:00:00");

  const [timeDiff, setTimeDiff] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateDiff = () => {
      const now = new Date();
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeDiff({ years, months, days, hours, minutes, seconds });
    };

    updateDiff(); // primeira chamada imediata
    const interval = setInterval(updateDiff, 1000);
    return () => clearInterval(interval);
  }, []);

  const { years, months, days, hours, minutes, seconds } = timeDiff;

  return (
    <div className="flex items-center justify-center flex-col gap-2 w-full border-1 border-love rounded-xl p-2">
      <div className="flex items-center justify-center gap-2 w-full">
        {[
          { label: "anos", value: years },
          { label: "meses", value: months },
          { label: "dias", value: days },
          { label: "horas", value: hours },
          { label: "min", value: minutes },
          { label: "seg", value: seconds },
        ].map(({ label, value }, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <span className="flex items-center justify-center w-12 h-12 bg-love-radial text-white font-semibold text-2xl rounded-xl">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-md text-white">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-white">Desde 08/09/2021</p>
    </div>
  );
}
