import { User } from "./User";

export class Board {
    constructor(
        private id: number,
        private boardTitle: string,
        private boardDescription: string,
        private user: User,
        private users: Array<User>
    ) {
    }
}