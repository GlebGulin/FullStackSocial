import axios from "axios";

const instance = axios.create({
    baseURL : "https://localhost:44367/"
});

export const GetUsers = (limit, pageNumber, Credentials) => {
    return instance.get(`users/other-users?limit=${limit}&page=${pageNumber}`, Credentials);
}

export const GetUser = (id) => {
    if (id == undefined){
        return instance.get(`profile/get-profile`);
    }
    return instance.get(`profile/get-profile?id=${id}`);
}

export const FollowUnfollow = (follow, id, Credentials) => {
    return instance.post("profile/follow-unfollow", {
        follow   : follow,
        id       : id

    }, Credentials);
}

export const CheckAuth = (Credentials) => {
    return instance.get(`auth/check-auth`, Credentials);
}

export const LoginUser = (login, password) => {
    return instance.post("auth/login", {
        login    : login,
        password : password
    });
}

export const RegistrationUser = (firstName, lastName, email, password, country, city, born, avatar) => {
    return  instance.post("auth/registration", {
        firstName: firstName,
        lastName : lastName,
        email    : email,
        password : password,
        country  : country,
        city     : city,
        born     : born,
        avatar   : avatar

    });
}

