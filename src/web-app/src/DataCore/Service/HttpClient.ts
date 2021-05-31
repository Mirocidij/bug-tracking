import axios from 'axios';

function createSession() {
    return axios.create({
        baseURL: "http://localhost:9000/api/v1/",
    });
}

class _HttpClient {
    private session: any

    constructor() {
        this.session = createSession();
    }

    get = (...params: any) =>
        this.session
            .get(...params)
            .catch((exception: any) => {
                throw exception;
            });

    post = (...params: any) => this.session.post(...params);

    put = (...params: any) => this.session.put(...params);

    delete = (...params: any) => this.session.delete(...params);
}

const HttpClient = new _HttpClient();

export default HttpClient;
