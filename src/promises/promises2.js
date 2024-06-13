
const userAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'Alex'}, {name: 'Bob'}])
    },
    login(login, pass) {
        if (login !== '123' && pass !== '123') {
            return Promise.reject({err: 'Incorrect login and password'})
        } else {
            return Promise.resolve({name: 'Aleks', id: 12, avatar: 'url'})
        }
    }
}

userAPI.login('123', '123')
    .then(data => console.log(data))
    .catch(err => console.log(err))