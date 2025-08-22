import api from "../../api";

export const GetAnnouncements = () => {
    return api.get('guardian/profile/notification');
};