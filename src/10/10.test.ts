import {
    addBooks,
    incAge,
    movedToOtherHouse,
    moveUser, updateBook,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
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




