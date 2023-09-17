
import { createConnection } from 'mysql2/promise'; 

async function testDatabaseConnection() {
    const connection = await createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'shopdata',
    });

    try {
        await connection.query('SELECT 1');
        console.log('Connected to MySQL database successfully.');
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
    } finally {
        await connection.end();
    }
}

testDatabaseConnection();