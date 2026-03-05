"use client";

import GlobalApi from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import { Clock, NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookingSection from "./BookingSection";

function SuggestedBusinessList({ business }) {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (business?.category?.name) {
      getBusinessList();
    }
  }, [business?.category?.name]);

  const getBusinessList = async () => {
    const resp = await GlobalApi.getBusinessByCategory(
      business.category.name
    );
    setBusinessList(resp?.businessLists || []);
  };

  return (
    <div className="md:pl-10">
               <h2 className="text-gray-500 mb-4 flex items-center gap-2">
            <Clock/> Available 8:00 AM to 10:00 PM 
           </h2>
      <BookingSection business={business}>
        <Button className="flex gap-2 w-full">
          <NotebookPen /> Book Appointment
        </Button>
        
      </BookingSection>

      <div className="hidden md:block">
        <h2 className="font-bold text-lg mt-3 mb-3">
          Similar Business
        </h2>

        {businessList.map((item) => (
          <Link
            key={item.id}
            href={`/details/${item.id}`}
            className="flex gap-2 mb-4 hover:border rounded-lg p-2 hover:shadow-md border-primary"
          >
            <Image
              src={item?.images?.[0]?.url || "/placeholder.png"}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-lg object-cover h-[100px]"
            />

            <div>
              <h2 className="font-bold">{item.name}</h2>
              <h2 className="text-primary">{item.contactPerson}</h2>
              <h2 className="text-gray-400">{item.address}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SuggestedBusinessList;

