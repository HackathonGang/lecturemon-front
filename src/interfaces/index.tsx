export interface IUser {
    logged?: boolean
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
    module_code: string,
    module_name: string,
    module_lecturer: string,
    module_id: number,
    lecturer_id: number
}

export interface ISurvey {
    survey_id: number,
    survey_type: string,
    survey_name: string
}