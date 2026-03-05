"use client";

import React, { useEffect, useState } from "react";
import BusinessInfo from "./_components/BusinessInfo";
import PublicFeedbackList from "./_components/PublicFeedbackList";
import GlobalApi from "@/app/_services/GlobalApi";

function BusinessDetail({ params }) {
  const [business, setBusiness] = useState(null);

  // ⭐ NEW STATES (ADD THIS)
  const [rating, setRating] = useState("0.0");
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    getBusinessDetails();
  }, []);

  const getBusinessDetails = async () => {
    const resp = await GlobalApi.GetBusinessBySlug(params.slug);
    setBusiness(resp?.business);
  };

  return (
    <div className="p-8">
      {/* ⭐ Pass rating props */}
      <BusinessInfo
        business={business}
        rating={rating}
        totalReviews={totalReviews}
      />

      {/* ⭐ Connect review system */}
      <PublicFeedbackList
        business={business}
        onAverageChange={(avg, count) => {
          setRating(avg);
          setTotalReviews(count);
        }}
      />
    </div>
  );
}

export default BusinessDetail;