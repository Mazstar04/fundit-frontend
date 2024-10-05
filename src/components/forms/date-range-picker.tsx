// 'use client';
// import React, { useState } from 'react';
// import { format } from 'date-fns';
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/theme/default.css';
// import 'react-date-range/dist/styles.css';
// import { HiOutlineCalendar } from 'react-icons/hi2';

// export default function DateRangePicker({
//   selectedDateRange,
//   setSelectedDateRange,
// }: {
//   selectedDateRange: any;
//   setSelectedDateRange: (range: any) => void;
// }) {
//   const [isDatePickerVisible, setDatePickerVisible] = useState(false);
//   const [hasSelectedDate, setHasSelectedDate] = useState(false);

//   const handleDateRangeChange = (ranges: any) => {
//     setSelectedDateRange(ranges.selection);
//     setDatePickerVisible(false);
//     if (!hasSelectedDate) {
//       setHasSelectedDate(true);
//     }
//   };

//   const toggleDatePicker = () => {
//     setDatePickerVisible(!isDatePickerVisible);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDatePicker}
//         className="text-[13px] font-[600] rounded-[6px] border border-[#D0D5DD] text-[#344054] px-4 py-2 flex items-center gap-2 font-urbanist"
//       >
//         <HiOutlineCalendar size={16} />
//         {!hasSelectedDate
//           ? 'Select Dates'
//           : `${
//               selectedDateRange.startDate && selectedDateRange.endDate
//                 ? `${format(
//                     selectedDateRange.startDate,
//                     'MMM d, yyyy',
//                   )} - ${format(selectedDateRange.endDate, 'MMM d, yyyy')}`
//                 : 'Invalid Date Range'
//             }`}
//       </button>

//       {isDatePickerVisible && (
//         <div className="absolute z-10 right-0">
//           <DateRange
//             ranges={[selectedDateRange]}
//             onChange={handleDateRangeChange}
//             editableDateInputs={true}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
