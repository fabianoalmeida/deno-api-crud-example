import db from '../db/mongodb.ts';
import { User } from '../models/user.ts';

class UserRepository {
    private usersCollection = db.collection("users");

    async getAll() {
        return await this.usersCollection.find();
    }

    async getById(id: string) {
        const user: User | undefined = await this.usersCollection.findOne({ _id: { $oid: id } });

        return user;
    }

    async create(user: User) {
        user.create_at = new Date();
        user.update_at = new Date();

        const { $oid } = await this.usersCollection.insertOne(user);

        return $oid;
    }

    async update(id: string, user: { name?: string; email?: string }) {
        const updateUser = await this.usersCollection.updateOne(
            { _id: { $oid: id } },
            {
                $set: user,
            },
        );

        return updateUser;
    }

    async delete(id: string) {
        const user = await this.usersCollection.deleteOne({ _id: { $oid: id } });

        return user;
    }
}

export default UserRepository;