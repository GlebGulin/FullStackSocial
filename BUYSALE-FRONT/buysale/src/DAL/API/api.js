import axios from "axios";

export const GetUsers = (limit, pageNumber, Credentials) => {
    return axios.get(`https://localhost:44367/users/other-users?limit=${limit}&page=${pageNumber}`, Credentials);
}

export const FollowUnfollow = (follow, id, Credentials) => {
    return axios.post("https://localhost:44367/profile/follow-unfollow", {
        follow   : follow,
        id       : id

    }, Credentials);
}

