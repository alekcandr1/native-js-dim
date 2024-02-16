import { ManType } from './Destr';

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Alex',
        age: 32,
        lessons: [{title: '1-1'}, {title: '1-2'}],
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

})