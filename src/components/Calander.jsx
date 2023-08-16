import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

const Calander = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangeCalendar"]}>
            <DateRangeCalendar  className="overflow-hidden font-bold text-black"/>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Calander;
