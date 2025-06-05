import axios from 'axios';
import { config } from '@/lib/config';

const { apiBaseUrl, apiKey, apiTimeout } = config;

const client = axios.create({
    baseURL: apiBaseUrl,
    timeout: apiTimeout,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
    },
});

export default client;
