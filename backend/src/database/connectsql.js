import mysql from 'mysql2/promise';

const connectDb = async() =>{
    const connect = mysql.createPool({
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        database: process.env.DATABASE_NAME,
        port: process.env.PORT
    })
    
    try {
        await connect.getConnection();
        console.log('Connected to the MySQL database.');
    } catch (error) {
        console.error('Unable to connect to the MySQL database:', error);
    }

    return await connect;
}

export default connectDb;