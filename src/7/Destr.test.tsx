import { ManType } from './Destr';

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Alex',
        age: 32,
        lessons: [{title: '1-1'}, {title: '1-2'}, {title: '1-3'}, {title: '1-4'}],
        address: {
            city: 'Minsk',
            street: 'White street'
        }
    }
})


test('Age', () => {
    const {age, lessons} = props
    const {street} = props.address

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(street).toBe('White street')
})


test('Test 2', () => {

    const [l1, l2, ...restLessons] = props.lessons

    expect(l1.title).toBe('1-1')
    expect(l2.title).toBe('1-2')
    expect(restLessons.length).toBe(2)

})