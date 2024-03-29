export interface UserCredentials {
    name: string,
    email: string,
    password: string
}

export interface PasswordHash {
    password: string,
    hashed: string
}

export interface UserData {
    _id: string,
    name: string,
    password: string,
    email: string
}

export interface UserResponse {
    _doc: UserData
}

export interface UserRequest {
    password: string,
    rest: UserResponse
}