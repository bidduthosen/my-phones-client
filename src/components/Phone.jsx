import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData()
    console.log(phone)
    return (
        <div>
            <p>phone</p>
        </div>
    );
};

export default Phone;