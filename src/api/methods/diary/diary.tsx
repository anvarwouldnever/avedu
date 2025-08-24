import api from "../../api";

export const GetDiary = (date: string) => {
    return api.get(`guardian/content/section/journal`, {
        params: {
            date: date,
        },
    });
};