// "use client";

// import React, { useEffect, useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import BookingHistoryList from "./_component/BookingHistoryList";
// import GlobalApi from "@/app/_services/GlobalApi";
// import { useSession, useUser } from "@descope/nextjs-sdk/client";
// import moment from "moment";

// function MyBooking() {
//   const { isAuthenticated, isSessionLoading } = useSession();
//   const { user } = useUser();

//   const [bookingHistory, setBookingHistory] = useState([]);

//   /* ================= FETCH BOOKINGS ================= */
//   useEffect(() => {
//     if (isAuthenticated && user?.email) {
//       fetchUserBookings();
//     }
//   }, [isAuthenticated, user?.email]);

//   const fetchUserBookings = async () => {
//     try {
//       const resp = await GlobalApi.GetUserBookingHistory(user.email);
//       setBookingHistory(resp?.bookings || []);
//     } catch (error) {
//       console.error("Fetch booking error:", error);
//     }
//   };

//   /* ================= FILTER LOGIC (DATE + TIME) ================= */
//   const filterData = (type) => {
//     const now = moment(); // current date + time

//     return bookingHistory.filter((item) => {
//       // booking ka exact date-time
//       const bookingDateTime = moment(
//         `${item.date} ${item.time}`,
//         "DD-MMM-YYYY hh:mm A"
//       );

//       if (!bookingDateTime.isValid()) return false;

//       return type === "booked"
//         ? bookingDateTime.isSameOrAfter(now) // future (date or time)
//         : bookingDateTime.isBefore(now);     // past
//     });
//   };

//   /* ================= AUTH STATES ================= */
//   if (isSessionLoading) {
//     return <p className="p-10 text-center">Loading...</p>;
//   }

//   if (!isAuthenticated) {
//     return <p className="p-10 text-center">Please login</p>;
//   }

//   /* ================= UI ================= */
//   return (
//     <div className="my-10 mx-5 md:mx-36">
//       <h2 className="font-bold text-[22px] my-4">My Bookings</h2>

//       <Tabs defaultValue="booked" className="w-full">
//         <TabsList className="w-full justify-start">
//           <TabsTrigger value="booked">Booked</TabsTrigger>
//           <TabsTrigger value="completed">Completed</TabsTrigger>
//         </TabsList>

//         {/* ================= BOOKED ================= */}
//         <TabsContent value="booked">
//           <BookingHistoryList
//             bookingHistory={filterData("booked")}
//             type="booked"
//             setBookingHistory={setBookingHistory}
//           />
//         </TabsContent>

//         {/* ================= COMPLETED ================= */}
//         <TabsContent value="completed">
//           <BookingHistoryList
//             bookingHistory={filterData("completed")}
//             type="completed"
//             setBookingHistory={setBookingHistory}
//           />
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

// export default MyBooking;










// cancel ka button add karne ke baad ka code upar wala code sahi hai usme kuch nhi karna hai

"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./_component/BookingHistoryList";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession, useUser } from "@descope/nextjs-sdk/client";
import moment from "moment";

function MyBooking() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user } = useUser();

  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      fetchUserBookings();
    }
  }, [isAuthenticated, user?.email]);

  const fetchUserBookings = async () => {
    const resp = await GlobalApi.GetUserBookingHistory(user.email);
    // 🔥 add default status
    const data =
      resp?.bookings?.map((b) => ({
        ...b,
        status: b.status || "BOOKED",
      })) || [];
    setBookingHistory(data);
  };

  const filterData = (type) => {
    const now = moment();

    if (type === "cancelled") {
      return bookingHistory.filter(
        (b) => b.status === "CANCELLED"
      );
    }

    return bookingHistory.filter((b) => {
      const dateTime = moment(
        `${b.date} ${b.time}`,
        "DD-MMM-YYYY hh:mm A"
      );

      if (type === "booked") {
        return dateTime.isAfter(now) && b.status !== "CANCELLED";
      }

      // completed
      return dateTime.isBefore(now) && b.status !== "CANCELLED";
    });
  };

  if (isSessionLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Please login</p>;

  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[22px] my-4">My Bookings</h2>

      <Tabs defaultValue="booked">
        <TabsList>
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="booked">
          <BookingHistoryList
            bookingHistory={filterData("booked")}
            type="booked"
            setBookingHistory={setBookingHistory}
          />
        </TabsContent>

        <TabsContent value="completed">
          <BookingHistoryList
            bookingHistory={filterData("completed")}
            type="completed"
            setBookingHistory={setBookingHistory}
          />
        </TabsContent>

        <TabsContent value="cancelled">
          <BookingHistoryList
            bookingHistory={filterData("cancelled")}
            type="cancelled"
            setBookingHistory={setBookingHistory}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;