function getEnvVariable(name: string, required = true): string {
    const value = process.env[name];

    if (required && value == null) {
        throw new Error(`❌ Missing required environment variable: ${name}`);
    }

    return value!;
}

const nodeEnv = getEnvVariable('NODE_ENV', false) || 'development';

export const config = {
    apiBaseUrl: getEnvVariable('API_BASE_URL'),
    apiKey: getEnvVariable('API_KEY'),
    apiTimeout: parseInt(getEnvVariable('API_TIMEOUT', false) || '30000', 10),
    nodeEnv,
    isDebug: nodeEnv !== 'production',
    productsListPage: {
        pageSize: 10,
        debounceDelay: 500,
    },
};

export type Config = typeof config;
