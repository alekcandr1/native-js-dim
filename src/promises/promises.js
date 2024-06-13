const axios = {
    _fake(url, data) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                    let responseData = {
                        text: `${url} loves you`
                    }
                    if (url.indexOf('it-kamasutra') > 0) {
                        responseData = {
                            requestedCount: data.count,
                            message: 'we will prepare students for you'
                        }
                    } else if (url.indexOf('google') > 0) {
                        responseData = {
                            vacancies: 12
                        }
                    } else if (url.indexOf('microsoft') > 0) {
                        responseData = {
                            vacancies: 21
                        }
                    }
                    res({
                        request: '',
                        status: 200,
                        headers: '',
                        config: '',
                        data: responseData,

                    })
                },
                1000)
        })
    }
}

// axios._fake('it-kamasutra', null)
//     .then(data=>{
//         console.log(data)
//         return 'google'
//     })
//     .then(data=> axios._fake(data, null))
//     .then(data=>{
//         console.log(data)
//     })

const findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'Alex', friendID: 4},
        {id: 2, name: 'Bob', friendID: 3},
        {id: 3, name: 'Ann', friendID: 1},
    ]
    return new Promise((res, rej) => {
        const user = users.find(e => e.id === id)
        setTimeout(() => {
            user
                ? res(user)
                : rej(new Error('User not found'))
        }, 1000)
    })
}

// console.log('start')
//
// const promise1 =
//     findUserInDB(1)
//         .then((data) => {
//             console.log(data)
//         })
//
// const promise2 =
//     findUserInDB(1)
//         .then((data) => {
//             console.log(data)
//         })
//
// Promise.all([promise1, promise2])
//     .then(() => {
//         console.log('all promises resolved')
//     })
//
// console.log('end')
//
////////////////////////////////////////////

// findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         return user.friendID
//     })
//     .then(friend => findUserInDB(friend))
//     .catch(err=>{
//         // alert('Sorry, try later')
//         return {name: 'Bot friend', id: 99999, friendID: 1}
//     })
//     .then(friend => {
//         console.log(friend)
//         return friend.friendID
//     })
//     .then((friend) => findUserInDB(friend))
//     .then(friend=> {
//         console.log(friend)
//     })
//     .catch(err=>console.log(err))

/////////////////////////////////////////

// async function foundUser() {
//     try {
//         let user = await findUserInDB(1)
//         console.log(user.name)
//         let friend = await findUserInDB(user.friendID)
//         console.log(friend.name)
//         let friend2 = await findUserInDB(friend.friendID)
//         console.log(friend2.name)
//     } catch (err) {
//         alert ('Error')
//     }
//
// }
// foundUser()

////////////////////////////

// function getNumber() {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             if (true) {
//                 let num = Math.random()
//                 res(num)
//             } else {
//                 rej(new Error('Some error'))
//             }
//         }, 1000)
//     })
//     return promise
// }
//
// getNumber().then(num => console.log(num))
// getNumber().then(num => console.log(num))

///////////////////////////

// const repo = {
//     read() {
//         const data = '100'
//         return data
//             ? console.log('100')
//             : console.log('Error')
//     },
//     readAsync() {
//         return new Promise((res, rej) => {
//             const data = '100'
//             data
//                 ? res(data)
//                 : rej('Some ERROR')
//         })
//     }
// }
//
// const run = async () => {
//     let data = await repo.readAsync()
//     console.log(data)
// }
// run()

////////////////////////////////

// const count = new Promise((res, rej) => {
//     let count = 0
//     setInterval(() => {
//         res(count)
//     }, 1000)
// })
//
// count
//     .then(data => {
//         console.log(data)
//         return data + 1
//     })
//     .then(data => {
//         console.log(data)
//         return data + 1
//     })
//     .then(data => {
//         console.log(data)
//         return data + 1
//     })

/////////////////////////////
//
// function wait(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res()
//         }, ms)
//     })
// }
//
// async function counter() {
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
// }
//
// counter()

/////////////////////////////
