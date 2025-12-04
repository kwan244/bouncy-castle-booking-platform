import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

/**
 * In Next.js dev with hot reloading, we need to cache the connection so we don't open a new connection on every request.
 */

type MongooseCache = {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
};

let cached = (globalThis as any).mongoose as MongooseCache | undefined;

if (!cached) {
    cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (!MONGO_URI) {
        throw new Error('MONGO_URI environment variable is not set');
    }

    const uri = MONGO_URI; // narrowed to `string` by the check above

    if (cached && cached.conn) {
        return cached.conn;
    }

    if (cached && !cached.promise) {
        cached.promise = mongoose.connect(uri).then((mongooseInstance) => {
            return mongooseInstance as Mongoose;
        });
    }

    if (!cached) {
        // extra guard — ensure cache exists
        cached = (globalThis as any).mongoose = { conn: null, promise: null };
    }

    cached.conn = await cached.promise;
    return cached.conn;
}