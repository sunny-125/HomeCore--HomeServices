"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@descope/nextjs-sdk/client";

export default function FeedbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useUser();

  const businessId = searchParams.get("businessId");
  const service = searchParams.get("service");

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        businessId,
        name: user?.name || "Anonymous",
        rating,
        comment,
      }),
    });

    router.push(`/business/${businessId}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-20 border p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Feedback for {service}
      </h2>

      <form onSubmit={handleSubmit}>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border p-2 w-full mb-3"
        >
          {[5,4,3,2,1].map((num)=>(
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </select>

        <textarea
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
          className="border p-2 w-full mb-3"
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}