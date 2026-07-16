import { test, expect } from '@playwright/test';

test('Create a new order successfully', async ({ request }) => {

    const response = await request.post('/orders', {
        data: {
            customerId: 'CUS-01',
            total: 120000
        }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.customerId).toBe('CUS-01');
    expect(body.total).toBe(120000);
    expect(body.status).toBe('CREATED');
    expect(body.id).toBeTruthy();

});