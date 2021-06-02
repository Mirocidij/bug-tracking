import { User } from "./User";

export class Board {
    constructor(
        private id: number,
        private boardTitle: string,
        private boardDescription: string,
        private backgroundColor: number,
        private backgroundImageUrl: string,
        private boardOwner: User,
        private users: Array<User>
    ) {
    }
}