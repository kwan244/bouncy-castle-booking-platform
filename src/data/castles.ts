export type Castle = {
    id: string;
    name: string;
    size: string;
    ageRange: string;
    pricePerDay: number;
    description: string;
}

export const castles: Castle[] = [
    {
        id: "rainbow-bouncer",
        name: "Rainbow Bouncer",
        size: "4m x 4m x 3m",
        ageRange: "3-10 years",
        pricePerDay: 220,
        description:
        "A colourful classic bouncy castle perfect for backyard birthdays and smaller gatherings.",
    },
    {
        id: "princess-palace",
        name: "Princess Palace",
        size: "5m x 4m x 4m",
        ageRange: "4-12 years",
        pricePerDay: 260,
        description:
        "A princess-themed palace that adds a magical touch to any party or school event.",
    },
    {
        id: "jungle-jump",
        name: "Jungle Jump",
        size: "6m x 5m x 4m",
        ageRange: "5-12 years",
        pricePerDay: 300,
        description:
        "A larger jungle adventure castle with plenty of space for energetic kids to jump and play.",
    },
];

export function getAllCastles(): Castle[] {
    return castles;
}

export function getCastleById(id: string): Castle | undefined {
    return castles.find((castle) => castle.id === id);
}