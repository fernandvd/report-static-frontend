
export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(token) {
    localStorage.setItem("token", token);
}

export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}

export function removeStore() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}