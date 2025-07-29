// // CustomCalendar.tsx
// "use client";

// import { useState } from "react";
// import {
//   format,
//   startOfMonth,
//   endOfMonth,
//   startOfWeek,
//   endOfWeek,
//   addDays,
//   addMonths,
//   subMonths,
//   isSameMonth,
//   isSameDay,
// } from "date-fns";
// import { v4 as uuidv4 } from "uuid";

// export default function CustomCalendar() {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState<any[]>([]);

//   const handleDayClick = (day: Date) => setSelectedDate(day);

//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//   const monthStart = startOfMonth(currentMonth);
//   const monthEnd = endOfMonth(monthStart);
//   const startDate = startOfWeek(monthStart);
//   const endDate = endOfWeek(monthEnd);

//   const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
//   const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

//   const renderHeader = () => (
//     <div className="flex items-center justify-between px-4 py-2">
//       <div className="flex gap-2">
//         <button onClick={prevMonth} className="bg-gray-200 px-2 py-1 rounded">◀</button>
//         <select
//           value={format(currentMonth, "MMMM")}
//           onChange={(e) => {
//             const monthIndex = new Date(`${e.target.value} 1, ${currentMonth.getFullYear()}`).getMonth();
//             setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex, 1));
//           }}
//           className="border p-1 rounded"
//         >
//           {[...Array(12)].map((_, i) => (
//             <option key={i}>{format(new Date(2020, i), "MMMM")}</option>
//           ))}
//         </select>
//         <select
//           value={currentMonth.getFullYear()}
//           onChange={(e) => setCurrentMonth(new Date(+e.target.value, currentMonth.getMonth(), 1))}
//           className="border p-1 rounded"
//         >
//           {Array.from({ length: 20 }, (_, i) => 2015 + i).map((y) => (
//             <option key={y}>{y}</option>
//           ))}
//         </select>
//         <button onClick={nextMonth} className="bg-gray-200 px-2 py-1 rounded">▶</button>
//       </div>
//     </div>
//   );

//   const renderDays = () => (
//     <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
//       {daysOfWeek.map((day) => (
//         <div key={day} className="py-2">{day}</div>
//       ))}
//     </div>
//   );

//   const renderCells = () => {
//     const rows = [];
//     let days = [];
//     let day = startDate;

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         const formatted = format(day, "dd");
//         const cloneDay = day;

//         const todayEvents = events.filter((e) => isSameDay(new Date(e.date), cloneDay));

//         days.push(
//           <div
//             key={day.toString()}
//             className={`p-2 min-h-[90px] text-sm border rounded-md flex flex-col gap-1 cursor-pointer hover:bg-gray-100 transition ${
//               !isSameMonth(day, monthStart) ? "text-gray-300" : ""
//             } ${isSameDay(day, selectedDate) ? "bg-orange-100 border-orange-400" : ""}`}
//             onClick={() => handleDayClick(cloneDay)}
//           >
//             <span className="font-bold text-xs">{formatted}</span>
//             {todayEvents.map((e) => (
//               <span key={e.id} className="truncate text-[10px] text-blue-600">📌 {e.title}</span>
//             ))}
//           </div>
//         );

//         day = addDays(day, 1);
//       }

//       rows.push(<div key={day.toString()} className="grid grid-cols-7 gap-1">{days}</div>);
//       days = [];
//     }

//     return <div className="space-y-1">{rows}</div>;
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow">
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-1/4 p-4 border-r text-sm">
//           <h2 className="text-5xl font-bold text-orange-500 leading-tight">{format(selectedDate, "dd")}</h2>
//           <p className="text-lg font-medium">{format(selectedDate, "MMMM yyyy")}</p>
//           <nav className="mt-6 space-y-2">
//             <button className="w-full text-left text-orange-600 font-semibold">📅 Calendar</button>
//             <button className="w-full text-left">📌 Holidays</button>
//             <button className="w-full text-left">📆 Events</button>
//             <button className="w-full text-left">💻 Virtual Meeting</button>
//             <button className="w-full text-left">🌐 International Days</button>
//             <button className="w-full text-left">🏛 National Days</button>
//             <button className="w-full text-left mt-4">⚙️ Settings</button>
//           </nav>
//         </aside>

//         {/* Calendar Body */}
//         <div className="w-3/4 p-4">
//           {renderHeader()}
//           {renderDays()}
//           {renderCells()}

//           {/* Bottom Note Section */}
//           <div className="mt-6 bg-gray-100 p-4 rounded text-sm">
//             <p className="font-semibold mb-2">Today's Note:</p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Virtual Meeting regarding UI/UX from 1 PM to 3 PM</li>
//               <li>Interview for Data Analyst on Google Meet from 5 to 7 PM</li>
//               <li>sriyog.com domain renewal date</li>
//               <li>International Hand Wash Day</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Calendar(){
  return(
    <>
    <p>this is calendar page of our website</p>
    </>
  )
}