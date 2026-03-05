// "use client";

// import React, { useEffect, useState, use } from "react";
// import GlobalApi from "@/app/_services/GlobalApi";
// import { useUser } from "@descope/nextjs-sdk/client";
// import BusinessInfo from "../_components/BusinessInfo";
// import BusinessDescription from "../_components/BusinessDescription";
// import SuggestedBusinessList from "../_components/SuggestedBusinessList";

// function BusinessDetail({ params }) {
//   // ✅ FIX: unwrap params Promise
//   const { businessId } = use(params);

//   const { user, isLoading } = useUser();
//   const [business, setBusiness] = useState(null);

//   useEffect(() => {
//     if (businessId) {
//       getBusinessById(businessId);
//     }
//   }, [businessId]);

//   const getBusinessById = async (id) => {
//     try {
//       const resp = await GlobalApi.getBusinessById(id);
//       setBusiness(resp?.businessList || null);
//     } catch (error) {
//       console.error("Error fetching business:", error);
//     }
//   };

//   // ✅ Safe rendering
//   if (isLoading) {
//     return <p className="p-10 text-center">Loading...</p>;
//   }

//   if (!user) {
//     return <p className="p-10 text-center">Please login to view details</p>;
//   }

//   if (!business) {
//     return <p className="p-10 text-center">Business not found</p>;
//   }

//   return (
//     <div className="py-8 md:py-20 px-10 md:px-36">
//       <BusinessInfo business={business} />

//       <div className="grid grid-cols-3 mt-16 gap-8">
//         <div className="col-span-3 md:col-span-2 order-last md:order-first">
//           <BusinessDescription business={business} />
//         </div>
//         <div className="col-span-3 md:col-span-1">
//           <SuggestedBusinessList business={business} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BusinessDetail;












// ye uper wala code pura sahi isme kuch nhi karna hai ************************************************************




// "use client";

// import React, { useEffect, useState, use } from "react";
// import GlobalApi from "@/app/_services/GlobalApi";
// import { useUser } from "@descope/nextjs-sdk/client";
// import BusinessInfo from "../_components/BusinessInfo";
// import BusinessDescription from "../_components/BusinessDescription";
// import SuggestedBusinessList from "../_components/SuggestedBusinessList";

// export default function BusinessDetail({ params }) {
//   const { businessId } = use(params);

//   const { user, isLoading } = useUser();

//   const [business, setBusiness] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [editId, setEditId] = useState(null);

//   // ✅ Load Business + Reviews
//   useEffect(() => {
//     if (businessId) {
//       getBusinessById(businessId);
//       fetchReviews();
//     }
//   }, [businessId]);

//   const getBusinessById = async (id) => {
//     try {
//       const resp = await GlobalApi.getBusinessById(id);
//       setBusiness(resp?.businessList || null);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchReviews = async () => {
//     try {
//       const res = await fetch(`/api/reviews?businessId=${businessId}`);
//       const data = await res.json();
//       setReviews(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // ✅ Add / Update Review
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editId) {
//         // UPDATE
//         await fetch("/api/reviews", {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             id: editId,
//             rating,
//             comment,
//           }),
//         });
//       } else {
//         // ADD
//         await fetch("/api/reviews", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             businessId,
//             name: user?.name || "Anonymous",
//             rating,
//             comment,
//           }),
//         });
//       }

//       setRating(5);
//       setComment("");
//       setEditId(null);

//       fetchReviews();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // ✅ Delete Review
//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/api/reviews?id=${id}`, {
//         method: "DELETE",
//       });

//       fetchReviews();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // ✅ Edit Review
//   const handleEdit = (review) => {
//     setEditId(review.id);
//     setRating(review.rating);
//     setComment(review.comment);
//   };

//   // ✅ Average Rating
//   const averageRating =
//     reviews.length > 0
//       ? (
//           reviews.reduce((sum, item) => sum + item.rating, 0) /
//           reviews.length
//         ).toFixed(1)
//       : "0.0";

//   if (isLoading) {
//     return <p className="p-10 text-center">Loading...</p>;
//   }

//   if (!user) {
//     return <p className="p-10 text-center">Please login</p>;
//   }

//   if (!business) {
//     return <p className="p-10 text-center">Business not found</p>;
//   }

//   return (
//     <div className="py-8 md:py-20 px-10 md:px-36">
//       <BusinessInfo business={business} />

//       <div className="grid grid-cols-3 mt-16 gap-8">
//         <div className="col-span-3 md:col-span-2">
//           <BusinessDescription business={business} />

//           {/* ⭐ Review Section */}
//           <div className="mt-10">
//             <h2 className="text-2xl font-bold mb-4">
//               ⭐ {averageRating} ({reviews.length} Reviews)
//             </h2>

//             {/* Review Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="border p-4 rounded-lg mb-6"
//             >
//               <select
//                 value={rating}
//                 onChange={(e) => setRating(Number(e.target.value))}
//                 className="border p-2 w-full mb-3"
//               >
//                 {[5, 4, 3, 2, 1].map((num) => (
//                   <option key={num} value={num}>
//                     {num} ⭐
//                   </option>
//                 ))}
//               </select>

//               <textarea
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Write your review..."
//                 className="border p-2 w-full mb-3"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-4 py-2 rounded"
//               >
//                 {editId ? "Update Review" : "Submit Review"}
//               </button>
//             </form>

//             {/* Review List */}
//             {reviews.length === 0 && (
//               <p className="text-gray-500">No reviews yet.</p>
//             )}

//             <div className="space-y-4">
//               {reviews.map((item) => (
//                 <div
//                   key={item.id}
//                   className="border p-4 rounded-lg shadow-sm"
//                 >
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p className="text-yellow-500 font-bold">
//                     ⭐ {item.rating}
//                   </p>
//                   <p className="text-gray-700 mt-2">
//                     {item.comment}
//                   </p>

//                   <div className="flex gap-4 mt-3">
//                     <button
//                       onClick={() => handleEdit(item)}
//                       className="text-blue-600 text-sm"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="text-red-600 text-sm"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* ⭐ End Review Section */}
//         </div>

//         <div className="col-span-3 md:col-span-1">
//           <SuggestedBusinessList business={business} />
//         </div>
//       </div>
//     </div>
//   );
// }






// upr wala code pura sahi but isme date and time nhi dikh rhA HAI  uske liye niche code pasgte kar raH hu





"use client";

import React, { useEffect, useState, use } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { useUser } from "@descope/nextjs-sdk/client";
import BusinessInfo from "../_components/BusinessInfo";
import BusinessDescription from "../_components/BusinessDescription";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";

export default function BusinessDetail({ params }) {
  const { businessId } = use(params);

  const { user, isLoading } = useUser();

  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [editId, setEditId] = useState(null);

  // ✅ Load Business + Reviews
  useEffect(() => {
    if (businessId) {
      getBusinessById(businessId);
      fetchReviews();
    }
  }, [businessId]);

  const getBusinessById = async (id) => {
    try {
      const resp = await GlobalApi.getBusinessById(id);
      setBusiness(resp?.businessList || null);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`/api/reviews?businessId=${businessId}`);
      const data = await res.json();

      // ✅ Latest review first
      const sorted = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setReviews(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Add / Update Review
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await fetch("/api/reviews", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: editId,
            rating,
            comment,
          }),
        });
      } else {
        await fetch("/api/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            businessId,
            name: user?.name || "Anonymous",
            rating,
            comment,
          }),
        });
      }

      setRating(5);
      setComment("");
      setEditId(null);

      fetchReviews();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Delete Review
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/reviews?id=${id}`, {
        method: "DELETE",
      });

      fetchReviews();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Edit Review
  const handleEdit = (review) => {
    setEditId(review.id);
    setRating(review.rating);
    setComment(review.comment);
  };

  // ✅ Average Rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, item) => sum + item.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  if (isLoading) {
    return <p className="p-10 text-center">Loading...</p>;
  }

  if (!user) {
    return <p className="p-10 text-center">Please login</p>;
  }

  if (!business) {
    return <p className="p-10 text-center">Business not found</p>;
  }

  return (
    <div className="py-8 md:py-20 px-10 md:px-36">
      <BusinessInfo business={business} />

      <div className="grid grid-cols-3 mt-16 gap-8">
        <div className="col-span-3 md:col-span-2">
          <BusinessDescription business={business} />

          {/* ⭐ Review Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              ⭐ {averageRating} ({reviews.length} Reviews)
            </h2>

            {/* Review Form */}
            <form
              onSubmit={handleSubmit}
              className="border p-4 rounded-lg mb-6"
            >
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="border p-2 w-full mb-3"
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>
                    {num} ⭐
                  </option>
                ))}
              </select>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review..."
                className="border p-2 w-full mb-3"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {editId ? "Update Review" : "Submit Review"}
              </button>
            </form>

            {/* Review List */}
            {reviews.length === 0 && (
              <p className="text-gray-500">No reviews yet.</p>
            )}

            <div className="space-y-4">
              {reviews.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-lg shadow-sm relative"
                >
                  {/* ✅ Date Section Top Right */}
                  <div className="absolute right-3 top-3 text-right">
                    {item.createdAt && (
                      <p className="text-xs text-gray-500">
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    )}

                    {item.updatedAt && (
                      <p className="text-xs text-gray-400">
                        Edited:{" "}
                        {new Date(item.updatedAt).toLocaleString()}
                      </p>
                    )}
                  </div>

                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-yellow-500 font-bold">
                    ⭐ {item.rating}
                  </p>

                  <p className="text-gray-700 mt-2">
                    {item.comment}
                  </p>

                  <div className="flex gap-4 mt-3">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ⭐ End Review Section */}
        </div>

        <div className="col-span-3 md:col-span-1">
          <SuggestedBusinessList business={business} />
        </div>
      </div>
    </div>
  );
}