export interface IAuthorize {
    email: string,
    password: string
}

export interface IUserAuth {
    token: string
    user: { 
        _id: string
        age: number
        birth_date: Date
        email: string
        name: string
        state: string,
        city: string
    }
}