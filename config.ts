import "https://deno.land/x/dotenv/load.ts";

const APP_HOST = Deno.env.get('APP_HOST') || '127.0.0.1';
const APP_PORT = Deno.env.get('APP_PORT') || 3333;
const DB_HOST  = Deno.env.get('MONGO_URL') || "mongodb://localhost:27017";
const DB_NAME  = Deno.env.get('DATABASE_NAME') || "denoapi";

export {
    APP_HOST,
    APP_PORT,
    DB_HOST,
    DB_NAME,
};