import HttpClient from "./HttpClient";

class _Api {
    public async getAllUsers(params: any) {
        const response = await HttpClient.get('users/all', params);
        return response.data;
    }

    public async getAllBoards(params: any) {
        const response = await HttpClient.get('boards/all', params);

        return response.data;
    }
}

export const API = new _Api();