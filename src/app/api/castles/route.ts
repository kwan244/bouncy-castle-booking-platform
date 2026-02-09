import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import BouncyCastle from "@/models/BouncyCastle";

export async function GET() {
  try {
    await connectToDatabase();
    const castles = await BouncyCastle.find();

    return NextResponse.json(
      castles.map((c) => ({
        id: c._id.toString(),
        name: c.name,
        size: c.size,
        ageRange: c.ageRange,
        pricePerDay: c.pricePerDay,
        description: c.description,
      })),
    );
  } catch (error) {
    console.error("Failed to fetch castles:", error);
    return NextResponse.json(
      { error: "Failed to fetch castles" },
      { status: 500 },
    );
  }
}
