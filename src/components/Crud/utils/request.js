const URL = "http://localhost:8080/api/users";

export const getUsers = async() =>{
    const result = await fetch(URL, {method: "GET"});
    return result;
}

export const saveUser = async(name, last_name, age) =>{
    console.log(name, last_name, age);
    
    const result = await fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido que estamos enviando
        },
        body: JSON.stringify({
            name,
            last_name,
            age
        })
    })

    return result;
}