import api from "../../api";

export const GetSchedule = (date: string) => {
    return api.get(`guardian/content/section/journal`, {
        params: {
            date: date,
        },
    });
};