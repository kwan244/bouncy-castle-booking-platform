import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import BouncyCastle from "@/models/BouncyCastle";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Params) {
  try {
    await connectToDatabase();

    const { id } = await params;
    const castle = await BouncyCastle.findById(id);

    if (!castle) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: castle._id.toString(),
      name: castle.name,
      size: castle.size,
      ageRange: castle.ageRange,
      pricePerDay: castle.pricePerDay,
      description: castle.description,
    });
  } catch (error) {
    console.error("Failed to fetch castle:", error);
    return NextResponse.json(
      { error: "Failed to fetch castle" },
      { status: 500 },
    );
  }
}
