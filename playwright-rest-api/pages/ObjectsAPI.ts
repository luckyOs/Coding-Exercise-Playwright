import { APIRequestContext } from '@playwright/test';

export class ObjectsAPI {

    constructor(private request: APIRequestContext) {}

    async getAllObjects() {
        return this.request.get('/objects');
    }

    async createObject(payload: any) {
        return this.request.post('/objects', {
            data: payload
        });
    }

    async getObject(id: string) {
        return this.request.get(`/objects/${id}`);
    }

    async updateObject(id: string, payload: any) {
        return this.request.put(`/objects/${id}`, {
            data: payload
        });
    }

    async deleteObject(id: string) {
        return this.request.delete(`/objects/${id}`);
    }
}
