export interface UserCredentials {
    name: string,
    email: string,
    password: string
}

export interface PasswordHash {
    password: string,
    hashed: string
}