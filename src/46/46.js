let a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['Alex, Bob, Ann'],
    classroom: {
        teacher: {
            name: 'wew',
            age: 32,
        }
    }
}

let b = {...a, classroom: {...a.classroom, teacher: {...a.classroom.teacher}}}
b.protocol = 'http'
b.classroom.teacher.name = 'newTeacher'

console.log(a)
console.log(b)