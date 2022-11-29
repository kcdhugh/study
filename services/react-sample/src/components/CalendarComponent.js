import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
  const [calendarData, setCalendarData] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setCalendarData}
        value={calendarData}
        selectRange={true}
        prevLabel="before month"
        prev2Label="before year"
        nextLabel="next month"
        next2Label="next year"
      />
    </div>
  );
}

export default CalendarComponent;
