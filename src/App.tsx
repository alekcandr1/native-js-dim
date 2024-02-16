import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './6/6-callback';
import Destr from './7/Destr';

const man1 = {
    name: 'Alex',
    age: 32,
    lessons: [{title: '1-1'}, {title: '1-2'}],
    address: {
        city: 'Minsk',
        street: 'White street'
    }
}

function App() {
    return (
        <div>
            <User />
            <Destr title={ 'Man1' } man={ man1 } />
        </div>
    )
}

export default App;
