import api from "../../api";

export const GetProfile = () => {
    return api.get('guardian/profile');
};