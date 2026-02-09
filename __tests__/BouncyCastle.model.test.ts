import BouncyCastle from "@/models/BouncyCastle";

describe("BouncyCastle model", () => {
  it("creates a valid bouncy castle", async () => {
    const castle = await BouncyCastle.create({
      name: "Rainbow Castle",
      size: "4m x 5m",
      ageRange: "3–10 years",
      pricePerDay: 120,
      description: "Bright and colourful",
    });

    expect(castle._id).toBeDefined();
    expect(castle.name).toBe("Rainbow Castle");
    expect(castle.pricePerDay).toBe(120);
  });

  it("fails when required fields are missing", async () => {
    await expect(
      BouncyCastle.create({
        name: "Broken Castle",
      }),
    ).rejects.toThrow();
  });

  it("rejects negative pricePerDay", async () => {
    await expect(
      BouncyCastle.create({
        name: "Cheap Castle",
        size: "2m x 3m",
        ageRange: "2–5 years",
        pricePerDay: -50,
        description: "Invalid price",
      }),
    ).rejects.toThrow();
  });
});
