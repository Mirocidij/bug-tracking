import { API } from "../Service/Api";
import { User } from "../Model/User";

export default class UserInteractor {
    public static async getAll() {
        return API.getAllUsers({})
            .then((item) => item.map((it: any) => it as User))
    }
}