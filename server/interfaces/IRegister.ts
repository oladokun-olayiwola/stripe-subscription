export interface UserCredentials {
    name: string,
    email: string,
    password: string
}

export interface Hash {
    password: string,
    hashed: string
}