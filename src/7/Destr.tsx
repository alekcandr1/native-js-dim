import React, { useState } from 'react';

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

const Destr: React.FC<DestrPropsType> = ( {title, man, ...props} ) => {


    const [manOne, setManOne] = useState<ManType>(man)

    return (
        <div>
            <h1>{ title }</h1>
            <div>
                { man.name }
            </div>
        </div>
    );
};

export default Destr;