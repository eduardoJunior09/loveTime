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

    updateDiff(); // chamada inicial
    const interval = setInterval(updateDiff, 1000);
    return () => clearInterval(interval);
  }, []);

  const { years, months, days, hours, minutes, seconds } = timeDiff;

  return (
    <div className="flex items-center justify-center flex-col gap-4 w-full p-4">
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Anos", value: years },
          { label: "Meses", value: months },
          { label: "Dias", value: days },
          { label: "Horas", value: hours },
          { label: "Min", value: minutes },
          { label: "Seg", value: seconds },
        ].map(({ label, value }, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <span className="flex items-center justify-center w-18 h-18 bg-love-radial text-white font-bold text-3xl rounded-lg">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-sm text-gray-600 mt-2">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-500">Desde 08/09/2021</p>
    </div>
  );
}
