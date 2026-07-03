import { test, expect } from '@playwright/test';
import { ObjectsAPI } from '../pages/ObjectsAPI';
import { createPayload, updatePayload } from '../utils/testData';

let objectId: string;

test.describe('RESTful API CRUD Tests', () => {

    test('1. Get all objects', async ({ request }) => {

        const api = new ObjectsAPI(request);

        const response = await api.getAllObjects();

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(Array.isArray(body)).toBeTruthy();

        expect(body.length).toBeGreaterThan(0);

    });

    test('2. Create Object', async ({ request }) => {

        const api = new ObjectsAPI(request);

        const response = await api.createObject(createPayload);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.name).toBe(createPayload.name);

        expect(body.id).toBeTruthy();

        objectId = body.id;

    });

    test('3. Get Created Object', async ({ request }) => {

        const api = new ObjectsAPI(request);

        const response = await api.getObject(objectId);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.id).toEqual(objectId);

        expect(body.name).toEqual(createPayload.name);

    });

    test('4. Update Object', async ({ request }) => {

        const api = new ObjectsAPI(request);

        const response = await api.updateObject(objectId, updatePayload);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.name).toBe(updatePayload.name);

    });

    test('5. Delete Object', async ({ request }) => {

        const api = new ObjectsAPI(request);

        const response = await api.deleteObject(objectId);

        expect(response.status()).toBe(200);

    });

    test('6. Verify Deleted Object', async ({ request }) => {

        const api = new ObjectsAPI(request);

        const response = await api.getObject(objectId);

        expect(response.status()).toBe(404);

    });

});
