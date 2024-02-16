import React from 'react';

type AddressType = {
    city: string,
    street: string
}

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{title: string}>,
    address: AddressType
}

type DestrPropsType = {
    title: string
    man: ManType
}

const Destr: React.FC<DestrPropsType> = ( props ) => {
    const {title} = props
    const {name} = props.man

    return (
        <div>
            <h1>{ title }</h1>
            <div>
                { name }
            </div>
        </div>
    );
};

export default Destr;