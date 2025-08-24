import api from "../../api";

export const GetProgress = () => {
    return api.get(`guardian/content/section/stat`);
};