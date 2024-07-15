module.exports = {
    test: {
        client: 'pg',
        version: '14',
        connection: {
            host: '127.0.0.1',
            port: 5432,
            user: 'postgres',
            password: '',
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
        seeds: { 
            directory: './src/seeds',
        },
    }
};