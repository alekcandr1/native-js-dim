type UserType = {
    name: string,
    age: number,
    address: {
        city: string,
        street: string
    }
}

test('obj test', () => {

    const incAge = ( user: UserType ) => {
        user.age++;
    }

    let user = {
        name: 'Alex',
        age: 29,
        address: {
            city: 'Minsk',
            street: 'White'
        }
    }

    incAge(user)

    expect(user.age).toEqual(30)

})

test('array test', () => {

    let users = [
        {
            name: 'Alex',
            age: 29,
        },
        {
            name: 'Bob',
            age: 34,
        }
    ]

    let newUsers = users

    newUsers.push({name: 'Band', age: 10})

    expect(users[2]).toEqual({name: 'Band', age: 10})

})

test('value test', () => {

    let usersCount = 100
    let adminsCount = usersCount

    adminsCount++

    expect(usersCount).toEqual(100)
})

test('reference type test', () => {

    let user: UserType = {
        name: 'Alex',
        age: 29,
        address: {
            city: 'Minsk',
            street: 'White'
        }
    }

    let user2: UserType = {
        name: 'Ann',
        age: 29,
        address: user.address
    }

    user2.address.city = 'Milan'

    expect(user.address.city).toEqual('Milan')

})

test('reference type Array test', () => {

    const address = {
        city: 'Minsk',
        street: 'White'
    }
    let user: UserType = {
        name: 'Alex',
        age: 29,
        address: address
    }
    let user2: UserType = {
        name: 'Ann',
        age: 29,
        address: user.address
    }

    user2.address.city = 'Milan'

    const users = [
        user,
        user2,
        {
            name: 'Misha',
            age: 3,
            address: address
        }
    ]

    users[0].age = 30

    expect(user.age).toEqual(30)

})

test('sort array test', () => {

    const arr = ['f', 'h', 'd']
    arr.sort()
    expect(arr).toEqual(["d", "f", "h"])

})
test('sort array test 2', () => {

    const arr = ['f', 'h', 'd']
    const sortArr = [...arr]

    const passportist = (arr: Array<string>) => {
        sortArr.sort()
    }

    passportist(arr)

    expect(arr).toEqual(['f', 'h', 'd'])
    expect(sortArr).toEqual(["d", "f", "h"])


})

