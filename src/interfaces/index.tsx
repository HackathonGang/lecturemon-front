export interface IUser {
    logged: boolean
    name?: string
    id?: string
}

export interface IXp {
    current: number
    max: number
    quantifier: string
    level: number
}