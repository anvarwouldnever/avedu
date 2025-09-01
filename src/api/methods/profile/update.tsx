import api from "../../api";

export const PutProfile = (firstName: string, lastName: string, fatherName: string, gender: number, birthday: string, email: string, address: object) => {
    return api.put('guardian/profile/update', {
        first_name: firstName,
        last_name: lastName,
        father_name: fatherName,
        gender: gender,
        birthday: birthday,
        email: email,
        address: address
    });
};