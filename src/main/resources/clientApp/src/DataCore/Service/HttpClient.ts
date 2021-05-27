import axios from 'axios';

function createSession() {
  return axios.create({
    baseURL: "http://localhost:8085/api/",
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
        .catch((param: any) => {
          throw param;
        });

  post = (...params: any) => this.session.post(...params);

  put = (...params: any) => this.session.put(...params);

  delete = (...params: any) => this.session.delete(...params);
}

const HttpClient = new _HttpClient();

export default HttpClient;
