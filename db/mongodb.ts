import { MongoClient } from 'https://deno.land/x/mongo@v0.27.0/mod.ts';
import { DB_HOST, DB_NAME } from '../config.ts';

const client = new MongoClient();
client.connect(DB_HOST);

const db = client.database(DB_NAME);

export default db;