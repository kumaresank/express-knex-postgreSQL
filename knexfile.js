module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'development',
            user: 'postgres',
            password: 'test@123',
            charset: 'utf8'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};