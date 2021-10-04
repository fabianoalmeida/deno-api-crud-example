import { db, Bson } from '../db/mongodb.ts';
import { User } from '../models/user.ts';

type UserData = Pick<User, 'name' | 'email'>;

class UserRepository {
    private collection = db.collection<User>("users");

    async getAll() {
        return await this.collection.find({}).toArray();
    }

    async getById(id: string) {
        const user: User | undefined = await this.collection.findOne({ _id: new Bson.ObjectId(id) });
        return user;
    }

    async create(user: UserData) {
        const insertedId = await this.collection.insertOne({
            name: user.name,
            email: user.email,
            create_at: new Date(),
            update_at: new Date(),
        });
        return insertedId;
    }

    async update(id: string,
               user: {
                    name?: string;
                    email?: string
               }) {
        const updateUser = await this.collection.updateOne(
            { _id: new Bson.ObjectId(id) },
            {
                $set: user,
            },
        );

        return updateUser;
    }

    async delete(id: string) {
        return await this.collection.deleteOne({ _id: new Bson.ObjectId(id) });
    }
}

export default UserRepository;