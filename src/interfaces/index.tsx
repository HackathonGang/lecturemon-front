export interface IUser {
    logged: boolean
    name?: string
    id?: number
}

export interface IXp {
    current: number
    max: number
    quantifier: string
    level: number
}

export interface IToDo {
    moduleCode: string,
    title: string,
    id: number
}

export interface IModule {
    moduleCode: string,
    name: string,
    organiser: string,
    id: number
}