import { useEffect, useState } from "react";

const dateTime = (type: number): string => {
  const now = new Date();
  switch (type) {
    case 1:
      return now.toLocaleTimeString();
    case 2:
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    case 3:
      return now.toLocaleDateString();
    default:
      return "";
  }
};

const useTimeNow = () => {
  const [valueTime, setValueTime] = useState<string>("");
  const [valueContry, setValueContry] = useState<string>("");
  const [valueFormt, setValueFormt] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValueTime(dateTime(1));
    }, 1000);
    setValueContry(dateTime(2));
    setValueFormt(dateTime(3));
    return () => clearInterval(intervalId);
  }, []);

  const timeNow = valueTime;
  const contryNow = valueContry;
  const formtNow = valueFormt;

  return { timeNow, contryNow, formtNow };
};

export default useTimeNow;
