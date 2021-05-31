import { API } from "../Service/Api";
import { Board } from "../Model/Board";

export default class BoardInteractor {
    public static async getAll() {
        return API.getAllBoards({})
            .then((item) => item as Array<Board>)
    }
}