import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

/**
 * In Next.js dev with hot reloading, we need to cache the connection so we don't open a new connection on every request.
 */

type MongooseCache = {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
};

declare global {
    var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = globalThis.mongooseCache ?? { conn: null, promise: null };
globalThis.mongooseCache = cached;

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

    cached.conn = await cached.promise;
    return cached.conn;
}