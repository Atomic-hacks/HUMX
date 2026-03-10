import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState({ h: 11, m: 43, s: 22 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) {
          h = 23;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="flex gap-3">
      {[
        ["Hours", time.h],
        ["Mins", time.m],
        ["Secs", time.s],
      ].map(([l, v]) => (
        <div key={l} className="text-center">
          <div className="bg-white/20 rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold text-white">
            {pad(v)}
          </div>
          <p className="text-white/70 text-xs mt-1">{l}</p>
        </div>
      ))}
    </div>
  );
}
