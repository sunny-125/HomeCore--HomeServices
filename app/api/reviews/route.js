// let reviews = [];

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const businessId = searchParams.get("businessId");

//   const filtered = reviews.filter(
//     (item) => item.businessId === businessId
//   );

//   return Response.json(filtered);
// }

// export async function POST(req) {
//   const body = await req.json();
//   reviews.push(body);
//   return Response.json({ success: true });
// }





// review show karne ke add kiya

// import { NextResponse } from "next/server";

// let reviews = []; // Temporary memory storage

// // ✅ GET Reviews
// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const businessId = searchParams.get("businessId");

//   const filteredReviews = reviews.filter(
//     (item) => item.businessId === businessId
//   );

//   return NextResponse.json(filteredReviews);
// }

// // ✅ POST Review
// export async function POST(req) {
//   const body = await req.json();

//   const newReview = {
//     businessId: body.businessId,
//     name: body.name,
//     rating: Number(body.rating),
//     comment: body.comment,
//   };

//   reviews.push(newReview);

//   return NextResponse.json({
//     message: "Review added successfully",
//   });
// }









// import { NextResponse } from "next/server";

// let reviews = []; // temporary memory storage

// // ✅ GET Reviews
// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const businessId = searchParams.get("businessId");

//   const filtered = reviews.filter(
//     (item) => item.businessId === businessId
//   );

//   return NextResponse.json(filtered);
// }

// // ✅ POST Review
// export async function POST(req) {
//   const body = await req.json();

//   const newReview = {
//     businessId: body.businessId,
//     name: body.name,
//     rating: Number(body.rating),
//     comment: body.comment,
//   };

//   reviews.push(newReview);

//   return NextResponse.json({ success: true });
// }






// // adding edit and delete option

// import { NextResponse } from "next/server";

// let reviews = [];

// // ✅ GET
// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const businessId = searchParams.get("businessId");

//   const filtered = reviews.filter(
//     (item) => item.businessId === businessId
//   );

//   return NextResponse.json(filtered);
// }

// // ✅ POST (Add)
// export async function POST(req) {
//   const body = await req.json();

//   const newReview = {
//     id: Date.now().toString(), // unique id
//     businessId: body.businessId,
//     name: body.name,
//     rating: Number(body.rating),
//     comment: body.comment,
//   };

//   reviews.push(newReview);

//   return NextResponse.json({ success: true });
// }

// // ✅ PUT (Edit)
// export async function PUT(req) {
//   const body = await req.json();

//   reviews = reviews.map((item) =>
//     item.id === body.id
//       ? { ...item, rating: Number(body.rating), comment: body.comment }
//       : item
//   );

//   return NextResponse.json({ success: true });
// }

// // ✅ DELETE
// export async function DELETE(req) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   reviews = reviews.filter((item) => item.id !== id);

//   return NextResponse.json({ success: true });
// }




// add date and time ke baad

import { NextResponse } from "next/server";

let reviews = [];

// ✅ GET
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const businessId = searchParams.get("businessId");

  const filtered = reviews.filter(
    (item) => item.businessId === businessId
  );

  return NextResponse.json(filtered);
}

// ✅ POST (Add)
export async function POST(req) {
  const body = await req.json();

  const newReview = {
    id: Date.now().toString(),
    businessId: body.businessId,
    name: body.name,
    rating: Number(body.rating),
    comment: body.comment,
    createdAt: new Date().toISOString(), // ✅ date & time added
    updatedAt: null,
  };

  reviews.push(newReview);

  return NextResponse.json({ success: true });
}

// ✅ PUT (Edit)
export async function PUT(req) {
  const body = await req.json();

  reviews = reviews.map((item) =>
    item.id === body.id
      ? {
          ...item,
          rating: Number(body.rating),
          comment: body.comment,
          updatedAt: new Date().toISOString(), // ✅ update time added
        }
      : item
  );

  return NextResponse.json({ success: true });
}

// ✅ DELETE
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  reviews = reviews.filter((item) => item.id !== id);

  return NextResponse.json({ success: true });
}