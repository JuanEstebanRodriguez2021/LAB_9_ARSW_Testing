import { test, expect } from '@playwright/test';

test('Retrieve an existing order', async ({ request }) => {

    const createResponse = await request.post('/orders', {
        data: {
            customerId: 'CUS-02',
            total: 250000
        }
    });

    expect(createResponse.status()).toBe(201);

    const createdOrder = await createResponse.json();

    const response = await request.get(`/orders/${createdOrder.id}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(createdOrder.id);
    expect(body.customerId).toBe('CUS-02');
    expect(body.status).toBe('CREATED');

});