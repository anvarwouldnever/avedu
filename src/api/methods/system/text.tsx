import api from "../../api";

export const GetText = () => {
    return api.get('guardian/system/text');
};