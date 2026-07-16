import http from 'k6/http';
import { check } from 'k6';

export const options = {

    vus: 10,

    duration: '30s',

    thresholds: {

        http_req_failed: ['rate<0.01'],

        http_req_duration: ['p(95)<500']

    }

};

export default function () {

    const payload = JSON.stringify({

        customerId: 'CUS-01',

        total: 120000

    });

    const params = {

        headers: {

            'Content-Type': 'application/json'

        }

    };

    const response = http.post(
        'http://localhost:8085/orders',
        payload,
        params
    );

    check(response, {

        'Status is 201': (r) => r.status === 201

    });

}