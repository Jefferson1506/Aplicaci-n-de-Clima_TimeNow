import "react";
import "../styles/Nav.css";
import useTimeNow from "./timeNow";
export const Barra = () => {
  const { timeNow, contryNow, formtNow } = useTimeNow();
  return (
    <>
      <nav className="NavStyle">
        <ol>
          <li>{timeNow}</li>
          <li>{contryNow}</li>
          <li>{formtNow}</li>
        </ol>
      </nav>
    </>
  );
};
