const api = {
    async save() {

    },
    async read() {
        return Promise.resolve({name: 'Alex'})
    }
}

async function run() {
    await api.save()
    let data = await api.read()
    console.log('read', data)
}

run()