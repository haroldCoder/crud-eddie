import connectDb from "../database/connectsql.js"

export const getUsers = async() =>{
    const results = (await connectDb()).query('SELECT * FROM users');
    console.log(await results);
    const [rows] = await results;
    return await rows;
}

export const postUsers = async(name, last_name, age) =>{
    
    try {
        const results = (await connectDb()).query(`INSERT INTO users (name, last_name, age) VALUES ('${name}', '${last_name}', '${age}')`)
        return('Usuario creado exitosamente')
    } catch (error) {
        return('Error en la creación')
    }
}