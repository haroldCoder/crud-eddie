import connectDb from "../database/connectsql.js"

export const getUsers = async() =>{
    const results = (await connectDb()).query('SELECT * FROM users');
    console.log(await results);
    const [rows] = await results;
    return await rows;
}