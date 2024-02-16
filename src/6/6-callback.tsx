import React, { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';

// const houses = [
//     {
//         id: 1,
//         title: 'FireStation',
//         address: {
//             city: 'Minsk',
//             street: 'White street'
//         }
//     }
// ]
//
// const allHouses = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default allHouses;

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        e.ctrlKey && alert('User was deleted')
    }
    const saveUser = () => {
        alert('User was saved')
    }

    const onNameChanged = ( e: ChangeEvent<HTMLInputElement> ) => {
        console.log(e.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('onBlur')
    }

    return <UserBlock>
        <span>Alex</span>
        <input onChange={ onNameChanged } />
        <button name={'DEL'} onClick={ deleteUser } onBlur={ focusLostHandler }>delete</button>
        <button name={'SAVE'} onClick={ saveUser }>save</button>
    </UserBlock>
}

const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;

  button {
    margin: 10px;
  }

  span {
    display: block;
    margin: 10px;
  }
`
