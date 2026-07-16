import { test, expect } from '@playwright/test';

test('Reject an invalid order', async ({ request }) => {

    const response = await request.post('/orders', {
        data: {
            customerId: 'CUS-01',
            total: 6000000
        }
    });

    expect(response.status()).toBe(400);

});