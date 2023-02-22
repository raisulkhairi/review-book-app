export interface Books {
    id: number
    name: string
    year: string
    reviews: Reviews[]
}

export interface Reviews {
    email: string
    note: string,
    star: any,
}