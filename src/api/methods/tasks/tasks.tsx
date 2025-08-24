import api from "../../api";

export const GetTasks = () => {
    return api.get(`guardian/content/section/works?page=1&state=all&group_by_date=true`);
};
