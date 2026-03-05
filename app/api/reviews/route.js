

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