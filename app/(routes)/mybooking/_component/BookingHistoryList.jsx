// "use client";

// import { Button } from "@/components/ui/button";
// import { Calendar, Clock, MapPin, User } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import GlobalApi from "@/app/_services/GlobalApi";
// import { toast } from "sonner";
// import moment from "moment";

// /* ================== STATUS BADGE ================== */
// const StatusBadge = ({ booking }) => {
//   const bookingTime = moment(
//     `${booking.date} ${booking.time}`,
//     "DD-MMM-YYYY hh:mm A"
//   );
//   const now = moment();

//   if (bookingTime.isBefore(now)) {
//     return (
//       <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-700">
//         Completed
//       </span>
//     );
//   }

//   if (bookingTime.diff(now, "minutes") <= 30) {
//     return (
//       <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
//         Starting Soon
//       </span>
//     );
//   }

//   return (
//     <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
//       Booked
//     </span>
//   );
// };

// function BookingHistoryList({
//   bookingHistory = [],
//   setBookingHistory,
//   type,
// }) {
//   const [loadingId, setLoadingId] = useState(null);

//   /* ================== CANCEL BOOKING ================== */
//   const cancelAppointment = async (booking) => {
//     try {
//       setLoadingId(booking.id);

//       await GlobalApi.deleteBooking(booking.id);

//       // ✅ AUTO REFRESH (remove from parent state)
//       setBookingHistory((prev) =>
//         prev.filter((item) => item.id !== booking.id)
//       );

//       toast.success("Booking cancelled successfully!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Error while canceling booking!");
//     } finally {
//       setLoadingId(null);
//     }
//   };

//   /* ================== EMPTY STATE ================== */
//   if (bookingHistory.length === 0) {
//     return (
//       <div className="text-center text-gray-500 mt-10">
//         <p className="text-lg font-medium">
//           No bookings found
//         </p>
//         <p className="text-sm">
//           Book a service to see it here
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//       {bookingHistory.map((booking) => {
//         const bookingDateTime = moment(
//           `${booking.date} ${booking.time}`,
//           "DD-MMM-YYYY hh:mm A"
//         );
//         const isPast = bookingDateTime.isBefore(moment());

//         return (
//           <div
//             key={booking.id}
//             className="border rounded-lg p-4 shadow-sm"
//           >
//             <div className="flex gap-4">
//               {booking?.businessList?.images?.[0]?.url && (
//                 <Image
//                   src={booking.businessList.images[0].url}
//                   alt="business"
//                   width={120}
//                   height={120}
//                   className="rounded-lg object-cover"
//                 />
//               )}

//               <div className="flex flex-col gap-2 w-full">
//                 <div className="flex justify-between items-center">
//                   <h2 className="font-bold text-lg">
//                     {booking.businessList.name}
//                   </h2>
//                   <StatusBadge booking={booking} />
//                 </div>

//                 <p className="flex gap-2 text-primary items-center">
//                   <User size={16} />
//                   {booking.businessList.contactPerson}
//                 </p>

//                 <p className="flex gap-2 text-gray-500 items-center">
//                   <MapPin size={16} />
//                   {booking.businessList.address}
//                 </p>

//                 <p className="flex gap-2 text-gray-500 items-center">
//                   <Calendar size={16} />
//                   {booking.date}
//                 </p>

//                 <p className="flex gap-2 text-gray-500 items-center">
//                   <Clock size={16} />
//                   {booking.time}
//                 </p>
//               </div>
//             </div>

//             {/* ================== CANCEL BUTTON ================== */}
//             {type === "booked" && (
//               <AlertDialog>
//                 <AlertDialogTrigger asChild>
//                   <Button
//                     variant="outline"
//                     disabled={isPast || loadingId === booking.id}
//                     className={`mt-5 w-full border-red-400 text-red-500
//                       ${
//                         isPast
//                           ? "cursor-not-allowed opacity-60"
//                           : "hover:bg-red-50"
//                       }`}
//                   >
//                     {loadingId === booking.id
//                       ? "Cancelling..."
//                       : "Cancel Appointment"}
//                   </Button>
//                 </AlertDialogTrigger>

//                 {!isPast && (
//                   <AlertDialogContent>
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>
//                         Cancel this booking?
//                       </AlertDialogTitle>
//                       <AlertDialogDescription>
//                         This action cannot be undone.
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>

//                     <AlertDialogFooter>
//                       <AlertDialogCancel>
//                         No
//                       </AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() =>
//                           cancelAppointment(booking)
//                         }
//                       >
//                         Yes, Cancel
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 )}
//               </AlertDialog>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default BookingHistoryList;









// cancel ka button add krne ke baad ka code uper wala shi hai

"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";
import moment from "moment";

const StatusBadge = ({ booking }) => {
  const now = moment();
  const bookingTime = moment(
    `${booking.date} ${booking.time}`,
    "DD-MMM-YYYY hh:mm A"
  );

  // Cancelled always priority
  if (booking.status === "CANCELLED") {
    return (
      <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
        Cancelled
      </span>
    );
  }

  // Completed (past)
  if (bookingTime.isBefore(now)) {
    return (
      <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-700">
        Completed
      </span>
    );
  }

  // Starting Soon (next 30 minutes)
  if (bookingTime.diff(now, "minutes") <= 30) {
    return (
      <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
        Starting Soon
      </span>
    );
  }

  // Default future booking
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
      Booked
    </span>
  );
};

function BookingHistoryList({
  bookingHistory = [],
  setBookingHistory,
  type,
}) {
  const cancelBooking = async (booking) => {
    try {
      // ❌ delete nahi
      // ✅ sirf status change
      setBookingHistory((prev) =>
        prev.map((b) =>
          b.id === booking.id
            ? { ...b, status: "CANCELLED" }
            : b
        )
      );
      toast.success("Booking cancelled");
    } catch {
      toast.error("Cancel failed");
    }
  };

  const deleteBooking = async (id) => {
    try {
      await GlobalApi.deleteBooking(id);
      setBookingHistory((prev) =>
        prev.filter((b) => b.id !== id)
      );
      toast.success("Booking deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  if (bookingHistory.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No bookings found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {bookingHistory.map((booking) => (
        <div
          key={booking.id}
          className="border rounded-lg p-4 shadow-sm"
        >
          <div className="flex gap-4">
            {booking?.businessList?.images?.[0]?.url && (
              <div className="w-[100px] h-[100px] relative overflow-hidden rounded-lg">
                <Image
                  src={booking.businessList.images[0].url}
                  alt="business"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between">
                <h2 className="font-bold">
                  {booking.businessList.name}
                </h2>
                <StatusBadge booking={booking} />
              </div>

              <p className="flex gap-2 text-primary">
                <User size={16} />
                {booking.businessList.contactPerson}
              </p>

              <p className="flex gap-2 text-gray-500">
                <MapPin size={16} />
                {booking.businessList.address}
              </p>

              <p className="flex gap-2 text-gray-500">
                <Calendar size={16} />
                {booking.date}
              </p>

              <p className="flex gap-2 text-gray-500">
                <Clock size={16} />
                {booking.time}
              </p>
            </div>
          </div>

          {type === "booked" && (
            <Button
              variant="outline"
              className="mt-4 w-full border-red-400 text-red-500"
              onClick={() => cancelBooking(booking)}
            >
              Cancel Appointment
            </Button>
          )}

          {type === "cancelled" && (
            <Button
              variant="outline"
              className="mt-4 w-full border-red-400 text-red-500"
              onClick={() => deleteBooking(booking.id)}
            >
              <Trash2 size={16} className="mr-2" />
              Delete Booking
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookingHistoryList;












