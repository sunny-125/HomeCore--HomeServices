"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession, useUser } from "@descope/nextjs-sdk/client";
import { toast } from "sonner";
import moment from "moment";

function BookingSection({ children, business }) {
  const { isAuthenticated } = useSession();
  const { user } = useUser();

  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlot, setBookedSlot] = useState([]);

  useEffect(() => {
    generateTimeSlots();
  }, []);

  useEffect(() => {
    if (date && business?.id) {
      fetchBookedSlots();
    }
  }, [date, business?.id]);

  /* ================= TIME ================= */
  const generateTimeSlots = () => {
    const list = [];
    for (let i = 10; i <= 12; i++) {
      list.push({ time: `${i}:00 AM` });
      list.push({ time: `${i}:30 AM` });
    }
    for (let i = 1; i <= 6; i++) {
      list.push({ time: `${i}:00 PM` });
      list.push({ time: `${i}:30 PM` });
    }
    setTimeSlot(list);
  };

  /* ================= FETCH BOOKED ================= */
  const fetchBookedSlots = async () => {
    const resp = await GlobalApi.BusinessBookedSlot(
      business.id,
      moment(date).format("DD-MMM-YYYY")
    );
    setBookedSlot(resp?.bookings || []);
  };

  const isSlotBooked = (time) =>
    bookedSlot.some((item) => item.time === time);

  const isPastTime = (time) => {
    const fullTime = moment(
      `${moment(date).format("DD-MMM-YYYY")} ${time}`,
      "DD-MMM-YYYY hh:mm A"
    );
    return fullTime.isBefore(moment());
  };

  /* ================= SAVE ================= */
  const saveBooking = async () => {
    if (!isAuthenticated) {
      toast.error("Please login first");
      return;
    }

    try {
      await GlobalApi.createNewBooking(
        business.id,
        moment(date).format("DD-MMM-YYYY"),
        selectedTime,
        user.email,
        user.name
      );

      toast.success("Service booked successfully!");
      setSelectedTime("");
      fetchBookedSlots();
    } catch (e) {
      toast.error("Error while creating booking");
    }
  };

  /* ================= CANCEL BOOKING PROCESS ================= */
  const cancelBookingProcess = () => {
    setSelectedTime("");
    setDate(new Date());
    toast("Booking cancelled");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Book a Service</SheetTitle>
          <SheetDescription>
            Select date & time to book your service
          </SheetDescription>

          <h2 className="mt-5 font-bold">Select Date</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(day) =>
              day < new Date(new Date().setHours(0, 0, 0, 0))
            }
          />

          <h2 className="my-5 font-bold">Select Time Slot</h2>
          <div className="grid grid-cols-3 gap-3">
            {timeSlot.map((item, index) => {
              const disabled =
                isSlotBooked(item.time) || isPastTime(item.time);

              return (
                <Button
                  key={index}
                  disabled={disabled}
                  variant="outline"
                  className={`rounded-full ${
                    selectedTime === item.time &&
                    !disabled &&
                    "bg-primary text-white"
                  }`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  {item.time}
                </Button>
              );
            })}
          </div>
        </SheetHeader>

        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <div className="flex gap-4 w-full">
              <Button
                variant="destructive"
                className="w-full"
                onClick={cancelBookingProcess}
              >
                Cancel
              </Button>

              <Button
                className="w-full"
                disabled={!selectedTime}
                onClick={saveBooking}
              >
                Book
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default BookingSection;

