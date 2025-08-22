import api from "../../api";

export const GetRemarks = () => {
    return api.get('guardian/reports');
};