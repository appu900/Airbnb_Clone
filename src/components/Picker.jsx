import React from "react";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { Calendar } from "react-date-range";
// import { DateRangePicker } from "react-date-range";
// import { useState } from "react";
// import { addDays } from "date-fns";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const Picker = ({ visible, onClose }) => {
  // const [StartDate, setStartdate] = useState(new Date());
  // const [endDate, setenddate] = useState(new Date());
  // const selectionRange = {
  //   Startdate: StartDate,
  //   Enddate: endDate,
  //   key: "Selection",
  // };

  if (!visible) return null;
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangePicker"]}>
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
            className="h-[60px] "
          />
        </DemoContainer>
      </LocalizationProvider>
      
    </div>
  );
};

export default Picker;

{
  /* <div className=" bg-white  shadow-2xl w-[600px] h-[520px] border rounded-lg relative right-[70%] bottom-8 py-3">
<p className="text-left ml-6 text-xl text-black font-semibold">
  Select your Date
</p>

<DateRangePicker
  ranges={[selectionRange]}
  rangeColors={["#000000"]}
  minDate={new Date()}
  className="mt-5 h-[400px] bg-none text-black"
/>
<p className="bg-black px-4 py-2 w-[100px] ml-6 rounded-md text-white shadow-lg mt-2 cursor-pointer" onClick={()=>onClose()}>
  close
</p> */
}
// </div>
