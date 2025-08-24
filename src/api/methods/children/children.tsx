import api from "../../api";

export const GetChildren = () => {
    return api.get('guardian/profile');
};