import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import BouncyCastle from "@/models/BouncyCastle";
import { GET as getCastles } from "@/app/api/castles/route";
import { GET as getCastleById } from "@/app/api/castles/[id]/route";

jest.mock("@/lib/mongodb", () => ({
  connectToDatabase: jest.fn(),
}));

let mongo: MongoMemoryServer;

beforeAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterEach(async () => {
  const collections = await mongoose.connection.db!.collections();
  for (const collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

describe("GET /api/castles", () => {
  it("returns a list of castles", async () => {
    await BouncyCastle.create({
      name: "Rainbow Castle",
      size: "4m x 5m",
      ageRange: "3–10 years",
      pricePerDay: 120,
      description: "Bright and colourful",
    });

    const response = await getCastles();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveLength(1);
    expect(data[0].name).toBe("Rainbow Castle");
  });
});

describe("GET /api/castles/:id", () => {
  it("returns a single castle by id", async () => {
    const castle = await BouncyCastle.create({
      name: "Jungle Bounce",
      size: "5m x 6m",
      ageRange: "4–12 years",
      pricePerDay: 150,
      description: "Jungle themed",
    });

    const response = await getCastleById({} as Request, {
      params: Promise.resolve({ id: castle._id.toString() }),
    });

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.name).toBe("Jungle Bounce");
  });

  it("returns 404 for non-existent id", async () => {
    const response = await getCastleById({} as Request, {
      params: Promise.resolve({
        id: new mongoose.Types.ObjectId().toString(),
      }),
    });

    expect(response.status).toBe(404);
  });
});
