import {
    addBooks, addCompany, CompaniesType,
    incAge,
    moveUser, updateBook, updateCompany,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
} from './10';


test('increase age +1', () => {
    const user: UserType = {
        name: 'Bob',
        age: 32,
        address: {title: 'Minsk'},

    }
    const awesomeUser: UserType = incAge(user)

    expect(user.age).toBe(32)
    expect(awesomeUser.age).toBe(33)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    const user: UserWithLaptopType = {
        name: 'Bob',
        age: 32,
        address: {title: 'Minsk', house: 12},
        laptop: {title: 'Apple'}
    }
    const awesomeUser = moveUser(user, 'Bali')


    expect(user).not.toBe(awesomeUser)
    expect(user.address).not.toBe(awesomeUser.address)
    expect(user.laptop).toBe(awesomeUser.laptop)
    expect(user.address.title).toBe('Minsk')
    expect(awesomeUser.address.title).toBe('Bali')

})

test('upgrade laptop', () => {
    const user: UserWithLaptopType = {
        name: 'Bob',
        age: 32,
        address: {title: 'Minsk', house: 12},
        laptop: {title: 'Apple'}
    }
    const awesomeUser = upgradeLaptop(user, 'Zenbook')


    expect(user.laptop.title).toBe('Apple')
    expect(awesomeUser.laptop.title).toBe('Zenbook')

})


test('upgrade books', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Bob',
        age: 32,
        address: {title: 'Minsk', house: 12},
        laptop: {title: 'Apple'},
        books: ['CSS', 'JS', 'React']
    }
    const awesomeUser = addBooks(user, ['TS', 'RestAPI'])


    expect(user.books).not.toBe(awesomeUser.books)
    expect(awesomeUser.books).toStrictEqual(['CSS', 'JS', 'React', 'TS', 'RestAPI'])
    expect(awesomeUser.books.length).toBe(5)
    expect(user.books.length).toBe(3)

})


test('JS to TS', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Bob',
        age: 32,
        address: {title: 'Minsk', house: 12},
        laptop: {title: 'Apple'},
        books: ['CSS', 'JS', 'React']
    }
    const awesomeUser = updateBook(user, 'JS', 'TS')


    expect(user.books).toStrictEqual(['CSS', 'JS', 'React'])
    expect(awesomeUser.books).toStrictEqual(['CSS', 'TS', 'React'])

})


test('add company', () => {
    const user: UserWithLaptopType & UserWithBooksType & WithCompanyType = {
        name: 'Bob',
        age: 32,
        address: {title: 'Minsk', house: 12},
        laptop: {title: 'Apple'},
        books: ['CSS', 'JS', 'React'],
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]

    }
    const awesomeUser = addCompany(user, 3, 'Anderson')

    expect(user.companies.length).toBe(2)
    expect(awesomeUser.companies.length).toBe(3)
    expect(awesomeUser.companies[2]).toStrictEqual({id: 3, title: 'Anderson'})

})

test('associative array', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Bob',
        age: 32,
        address: {title: 'Minsk', house: 12},
        laptop: {title: 'Apple'},
        books: ['CSS', 'JS', 'React'],
    }

    let companies: CompaniesType = {
        'Bob': [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]
    }
    const copyCompanies = updateCompany(companies, 'Bob',1, 'ЕПАМ')

    expect(companies['Bob'][0].title).toBe('EPAM')
    expect(copyCompanies['Bob'][0].title).toBe('ЕПАМ')


})




