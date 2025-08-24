import api from "../../api";

export const Login = (phone: string, password: string) => {
    return api.post('guardian/auth/login', {
        phone: phone,
        password: password,
    });
};