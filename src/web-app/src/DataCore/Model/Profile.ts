import { User } from "./User";

export class Profile {
    constructor(
        private username: string,
        private token: string,
        private user: User
    ) {
    }
}