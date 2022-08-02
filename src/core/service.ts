import {Axios, AxiosRequestHeaders} from "axios";
import createHttpConnection, {CreateConnectionOptions} from "./http";
import * as _ from 'lodash';
import DefaultConnections from '@app/http';

export type ConnectionData = { label: string, baseURL: string, defaultHeaders?: AxiosRequestHeaders, options: CreateConnectionOptions };

export class BaseService {

    private readonly connections: {[key: string]: Axios};

    constructor(connections: ConnectionData[]) {
        this.connections = this.createConnections(connections);
    }

    private createConnections(connections: ConnectionData[]): {[key: string]: Axios} {
        return connections.reduce((curr, { baseURL, label, options, defaultHeaders }) => {
            curr[label] = createHttpConnection(baseURL, defaultHeaders, options);
            return curr;
        }, {} as {[key: string]: Axios})
    }

    protected getConnection(label: string) {
        return this.connections[label];
    }
}

export const defaultServiceData = { connections: [] };

export const Service = <T extends BaseService>(serviceClassName: new(...args: any[]) => T, options: { connections: ConnectionData[] } = defaultServiceData) => {
    const connections: ConnectionData[] = [
        ...(_.get(options, 'connections', [])),
        ...DefaultConnections
    ]
    return new serviceClassName(connections)
}

export const useService = <T extends BaseService>(serviceClassName: new(...args: any[]) => T, options: { connections: ConnectionData[] } = defaultServiceData) => {
    return Service(serviceClassName, options)
}

