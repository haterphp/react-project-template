import axios, {AxiosRequestHeaders, Axios} from 'axios';
import * as _ from 'lodash';

export class HttpConnection {

    private readonly connection: Axios;
    private readonly getToken: () => string;

    constructor(host: string, defaultHeaders: AxiosRequestHeaders, getTokenStrategy: () => string) {
        this.connection = axios.create({baseURL: host, headers: defaultHeaders})
        this.getToken = getTokenStrategy;
    }

    interceptRequest() {
        this.connection.interceptors.request.use((config) => {
            const token = this.getToken();
            if(token) {
                config.headers = {
                    Authorization: `Bearer ${token}`
                }
            }
            return config;
        })
    }

    interceptResponse() {}

    getConnection() { return this.connection; }
}

export type CreateConnectionOptions = {
    interceptors?: { request?: boolean, response?: boolean },
    getTokenStrategy: () => string
}

function createHttpConnection(host: string, defaultHeaders: AxiosRequestHeaders = {}, options: CreateConnectionOptions) {
    const {getTokenStrategy} = options;
    const connection = new HttpConnection(host, defaultHeaders, getTokenStrategy);
    if(_.get(options, 'interceptors.request', false)) connection.interceptRequest();
    if(_.get(options, 'interceptors.response', false)) connection.interceptResponse();
    return connection.getConnection();
}

export const actionTimeout = (timeout: number = 1000) =>
    new Promise((res) => setTimeout(() => res(true), timeout))


export default createHttpConnection;
