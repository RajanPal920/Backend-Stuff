import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/user",
    withCredentials: true
});


async function register(username ,email, password){
    try {
        const response = await api.post("/register", {
            username,
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw error;

    }
}

async function login(username, password){
    try {
        const response = await api.post("/login", {
            username,
            password
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getMe(){
    try {
        const response = await api.get("/get-me");  
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {register, login ,getMe};