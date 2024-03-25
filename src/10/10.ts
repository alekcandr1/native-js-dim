export type UserType = {
    name: string
    age: number
    address: {title: string, house?: number}
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompanyType = UserType & {
    companies: {id: number, title: string}[]
}
export  type CompaniesType = {
    [key: string]: {id: number, title: string}[]
}





export const incAge = ( u: UserType ) => {
    return {...u, age: u.age + 1}
}

export const moveUser = ( u: UserWithLaptopType, city: string ) => {
    return {...u, address: {...u.address, title: city}}
}

export const upgradeLaptop = ( u: UserWithLaptopType, laptop: string ) => {
    return {...u, laptop: {...u.laptop, title: laptop}}
}

export const addBooks = ( u: UserWithLaptopType & UserWithBooksType, books: Array<string> ) => {
    return {...u, books: [...u.books.concat(books)]}
}
export const updateBook = ( u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string ) => ({
    ...u,
    books: [...u.books.map(el => el === oldBook ? el = newBook : el)]
})

export const addCompany = ( u: UserWithLaptopType & UserWithBooksType & WithCompanyType, id: number, company: string ) => ({
    ...u,
    companies: [...u.companies, {id: id, title: company}]
})
export const updateCompany = ( companies: CompaniesType, userName: string, idCompany: number, newTitle: string ) => ({
    ...companies,
    [userName]: companies[userName].map(el=>el.id === idCompany ? {...el, title: newTitle}: el)
})