import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

interface ICalendarState {
  startDate: Date;
  endDate: Date;
}

function RangeDateComponent() {
  const [calendar, setCalendar] = useState("");
  const [open, setOpen] = useState(false);
  const refOne = useRef();

  useEffect(() => {
    setCalendar(format(new Date(), "MM/dd/yyyy"));
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("keydown", hideOnClickOutSide, true);
  }, []);

  const handleSelectDate = (date: Date) => {};
  // Hide on Escape
  const hideOnEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") return setOpen(false);
  };
  // Hide on Click Outside
  const hideOnClickOutSide = (e: KeyboardEvent) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
    }
  };

  return (
    <div className="calendarWrap">
      <input
        value={calendar}
        readOnly
        className="inputBox"
        onClick={() => setOpen(!open)}
      />
      <div ref={refOne}>
        {open && (
          <Calendar
            date={new Date()}
            onChange={handleSelectDate}
            className="calendar"
          />
        )}
      </div>
    </div>
  );
}

export default RangeDateComponent;
